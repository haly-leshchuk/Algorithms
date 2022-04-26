# CodeCademy Computer Science career path
# CS102: DATA STRUCTURES AND ALGORITHMS

# Given two strings, how can we determine the longest common subsequence?

dna_1 = 'ACCGTT'
dna_2 = 'CCAGCA'

# naive approach
# time complexity: O(n * n * m)
# space complexity: O(m)
def longest_subsequence(word1, word2):
    result = []

    for i in range(len(word1) + 1):
        sub_result = []
        new_word2 = word2

        for letter in word1[i:]:
            if letter in new_word2:
                sub_result += [letter]
                new_word2 = new_word2[new_word2.index(letter) + 1:]
        result.append(sub_result)

    return max(result, key=len)

# recursive approach,
# time complexity: O(n * n * m)
# space complexity: O(m)
def longest_subsequence_recurse(word1, word2, memo={}):
    if len(word1) == 0 or len(word2) == 0:
        return []

    sub_result = []
    new_word2 = word2

    for letter in word1:
        if letter in new_word2:
            sub_result += [letter]
            new_word2 = new_word2[new_word2.index(letter) + 1:]

    memo[word1] = sub_result
    longest_subsequence_recurse(word1[1:], word2, memo)
    return memo[max(memo, key=lambda value: len(memo[value]))]

#dynamic programming
#time complexity: O(n * n * m)
#space complexity: O(n * m)
def longest_subsequence_dynamic(word1, word2):

    table = [[[] for i in range(len(word2) + 1)] for j in range(len(word1) + 1)]

    for i in range(1, len(word1) + 1):
        for j in range(1, len(word2) + 1):

            if word1[i - 1] == word2[j - 1]:
                table[i][j] = table[i - 1][j - 1] + [word1[i - 1]]
            else:
                if len(table[i][j - 1]) > len(table[i - 1][j]):
                    table[i][j] = table[i][j - 1]
                else:
                    table[i][j] = table[i - 1][j]

    return table[-1][-1]

print(longest_subsequence(dna_1, dna_2))
print(longest_subsequence_recurse(dna_1, dna_2))
print(longest_subsequence_dynamic(dna_1, dna_2))
print(longest_subsequence_dynamic(dna_1, dna_2))
# result: ['C', 'C', 'G']
