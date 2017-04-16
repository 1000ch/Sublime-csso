import sublime
import sublime_plugin
import json
from os.path import dirname, realpath, join

try:
    # Python 2
    from node_bridge import node_bridge
except:
    from .node_bridge import node_bridge

sublime.Region.totuple = lambda self: (self.a, self.b)
sublime.Region.__iter__ = lambda self: self.totuple().__iter__()

BIN_PATH = join(sublime.packages_path(), dirname(realpath(__file__)), 'csso.js')

def get_setting(view, key):
    settings = view.settings().get('Csso')

    if settings is None:
        settings = sublime.load_settings('Csso.sublime-settings')

    return settings.get(key)

class CssoMinifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        if not self.has_selection():
            region = sublime.Region(0, self.view.size())
            originalBuffer = self.view.substr(region)
            processed = self.minify(originalBuffer)

            if processed:
                self.view.replace(edit, region, processed)

            return

        for region in self.view.sel():
            if region.empty():
                continue

            originalBuffer = self.view.substr(region)
            processed = self.minify(originalBuffer)

            if processed:
                self.view.replace(edit, region, processed)

    def minify(self, data):
        try:
            return node_bridge(data, BIN_PATH, [json.dumps({
                'restructure': get_setting(self.view, 'restructure')
            })])
        except Exception as e:
            sublime.error_message('csso\n%s' % e)

    def has_selection(self):
        for sel in self.view.sel():
            start, end = sel

            if start != end:
                return True

        return False
