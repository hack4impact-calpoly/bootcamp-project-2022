import pyperclip as clip
import re

# regex_search = re.compile(r"[^\*].*")


clipboard = clip.paste()

html_list = ''

for line in clipboard.splitlines():
    html_list += (f"'{line}',")

clip.copy(html_list)
print('CONVERTED SUCCESFULLY')
