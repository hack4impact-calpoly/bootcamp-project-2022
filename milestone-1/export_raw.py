import pyperclip as clip
import re

# regex_search = re.compile(r"[^\*].*")
regex_search = re.compile(r"[^\▢].*")

clipboard = clip.paste()

html_list = ''

for line in clipboard.splitlines():
    regex_match = regex_search.search(line)
    html_list += (f'<li>{regex_match[0]}</li>\n')

clip.copy(html_list)
print('CONVERTED SUCCESFULLY')
