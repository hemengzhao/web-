function templateString(template, context) {
    return template.replace(/\$\{(\w+)\}/g, (match, key) => {
      return context.hasOwnProperty(key) ? context[key] : '';
    });
  }
  
  // 使用示例
  const template = 'Hello, ${name}! Today is ${day}.';
  const context = { name: 'Alice', day: 'Wednesday' };
  console.log(templateString(template, context));
  // 输出: "Hello, Alice! Today is Wednesday."
  