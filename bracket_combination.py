# Coderbyte Coding Challenge (Hard)
#
# Print all combinations of n balanced parentheses.

def bracket_combination(number):

    collection = ['()']
    return bracket_combination_helper(number - 1, collection)


def bracket_combination_helper(number, collection):
    if number == 0:
        return set(collection)

    new_collection = []
    for item in collection:
        for i in range(len(item)):
            new_item = item[:i] + '()' + item[i:]
            new_collection.append(new_item)

    collection = new_collection

    return bracket_combination_helper(number - 1, collection)


print(bracket_combination(3))  # {'(())()', '((()))', '()(())', '(()())', '()()()'}
print(bracket_combination(2))  # {'()()', '(())'}
