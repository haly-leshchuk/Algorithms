# Coderbyte Coding Challenge (Medium)
#
# Min Window Substring - Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
# which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters,
# and your goal is to determine the smallest substring of N that contains all the characters in K.

import copy


def min_window_substring(arr):
    string, substring = arr
    substring = [char for char in substring]

    results = []
    for i in range(len(string)):

        if string[i] in substring:
            subword = ''
            substring_copy = copy.deepcopy(substring)

            idx = i
            while len(substring_copy) != 0:

                if idx < len(string):
                    subword += string[idx]
                    if string[idx] in substring_copy:
                        substring_copy.pop(substring_copy.index(string[idx]))
                    idx += 1
                else:
                    substring_copy = []
                    subword = ''

            if subword:
                results.append(subword)

    return min(results, key = lambda item: len(item))


print(min_window_substring(["aabdccdbcacd", "aad"]))
print(min_window_substring(["aaffsfsfasfasfasfasfasfacasfafe", "fafsf"]))
print(min_window_substring(["vvavereveaevafefaef", "vvev"]))
