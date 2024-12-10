/**
 * 676. 实现一个魔法字典
 *
 *
 *  设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
 *  实现 MagicDictionary 类：
 *  MagicDictionary() 初始化对象
 *  void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
 * bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。
 */

class MagicDictionary {
  list
  constructor() {
    this.list = [];
  }

  buildDict(dictionary) {
    dictionary.forEach((item) => {
      if (!this.list.includes(item)) {
        this.list.push(item);
      }
    });
  }
  diif(str1, str2, l) {
    let type = false;
    let num = 0;
    for (let i = 0; i < l; i++) {
      if (str1[i] !== str2[i]) {
        num += 1;
        type = true;
      }
      if (num > 1) {
        type = false;
        break;
      }
    }

    return type;
  }
  search(searchWord) {
    const l = searchWord.length;
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];
      if (l === item.length) {
        const type = this.diif(item, searchWord, l);
        if (type) {
          return true;
        }
      }
    }
    return false;
  }
}
