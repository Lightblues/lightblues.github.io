"""
为了放在 Butterfly 的随机图片中，生成图片地址
"""

import os
import re

# 假设文件名是 ghost-blade-12.jpg 形式的
re_digits = re.compile(r'(\d+)')        # 提取数字
def get_num(fn):
    num = re_digits.findall(fn)[-1]
    return int(num)

for dir in os.listdir('.'):
    if os.path.isdir(dir):
        fns = os.listdir(dir)
        img_fns = []
        for fn in fns:
            fn_parts = fn.split('.')
            if len(fn_parts) < 2: continue
            fn_type = fn_parts[-1]
            if fn_type in ['jpg', 'png']:
                img_fns.append(fn)
                
        for img_filename in sorted(img_fns, key=get_num):
            print(f'- /img/{dir}/{img_filename}')

