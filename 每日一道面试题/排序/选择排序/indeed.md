对于要排序的数组，设置一个 minIdx 记录最小数字的下标。先假设第 1 个数字最小，此时 minIdx = 0，
将 arr[minIdx]与后续的数字逐一比较，当遇到更小的数字是，便将 minIdx 等改数字的下标，第一轮找出数组中最小的数字。找到后将 minIdx 下标的数字与第 1 个数字交换，此时称一个数字已被排序。
然后开始第 2 轮比较，令 minIdx = 1，重复上述过程。每一轮的比较将使得当前未排序数字中的最小者被排序，未排序数字总数减 1。第 arr.length−1 轮结束后排序完成。
