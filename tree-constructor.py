# Coderbyte Coding Challenge (Medium)
#
# Have the function TreeConstructor(strArr) take the array of strings stored in strArr, 
# which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree 
# and the second integer i2 signifies that it is the parent of i1. This forms a binary tree:
# If a proper binary tree cannot be formed with the integer pairs, then return the string false. 
# All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

from collections import Counter

def TreeConstructor(strArr):
    family = [item.strip(")").strip("(").split(",") for item in strArr]
    children = []
    parents = []

    for child, parent in family:
        children.append(int(child))
        parents.append(int(parent))

    if any(i > 1 for i in Counter(children).values()) is False \
            and any(j > 2 for j in Counter(parents).values()) is False:
        return True

    return False


print(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])) # True
