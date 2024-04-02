/**
 * 使字符串能够动态地执行 JavaScript 代码
 * */
const seep = (time) => {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}; // 这里不加分号，在node中运行会报错

(async function () {
  console.log(1111);
  await seep(3000);
  console.log(2222);
})();

// 发送消息时间  09:59:00.654
const one = {
  header: {
    messageNo: "d4b68d17-2ee7-4dd2-a96e-c5462a15cb61",
    messageType: "ALARM:ALARM_AND_ELIMINATION_CHANNEL",
    currentTimestamp: 1709776770504,
    needAck: false,
    from: "ALARM",
    to: "1743",
  },
  payload: {
    hasRead: false,
    messageType: 0,
    alarmId: 6466,
    createdTime: "2024-03-07 09:59:30",
    alarmIconUrl:
      "https://jiayuan.gongheyuan.com/resources/yc-hcp-test/product/dxalarm20230912.png",
    alarmTypeDesc: "紧急呼叫",
    detail:
      "【双桥恭和家园|2号楼|5层|2-502】【2502-吴菊梅】在【2502】发生【一键报警】",
    areaType: 1,
    communityId: 1,
    communityName: "双桥恭和家园",
    buildingId: 2,
    buildingName: "2号楼",
    floorId: 8,
    floorName: "5层",
    houseId: 92,
    houseName: "2-502",
    residentId: 141,
    residentName: "吴菊梅",
    infoType: "ABNORMAL",
  },
};

// 发送消息时间  09:59:36.633
const two = {
  header: {
    messageNo: "73726c6e-665b-4128-9ffe-8fab94a928e2",
    messageType: "ALARM:ALARM_AND_ELIMINATION_CHANNEL",
    currentTimestamp: 1709776806483,
    needAck: false,
    from: "ALARM",
    to: "1743",
  },
  payload: {
    hasRead: false,
    messageType: 4,
    alarmId: 6466,
    createdTime: "2024-03-07 10:00:06",
    alarmIconUrl:
      "https://jiayuan.gongheyuan.com/resources/yc-hcp-test/product/dxnormal20230912.png",
    alarmTypeDesc: "紧急呼叫",
    detail:
      "【双桥恭和家园|2号楼|5层|2-502】【吴菊梅】【无线紧急呼叫胸卡】【紧急呼叫】已取消，处理人姓名：第三方平台。",
    areaType: 1,
    communityId: 1,
    communityName: "双桥恭和家园",
    buildingId: 2,
    buildingName: "2号楼",
    floorId: 8,
    floorName: "5层",
    houseId: 92,
    houseName: "2-502",
    residentId: 141,
    residentName: "吴菊梅",
    infoType: "ABNORMAL",
  },
};

// 09:59:43.331
const three = {
  header: {
    messageNo: "787276a1-eff3-4fe6-aaf0-3fd6ff45df1f",
    messageType: "ALARM:ALARM_AND_ELIMINATION_CHANNEL",
    currentTimestamp: 1709776813181,
    needAck: false,
    from: "ALARM",
    to: "1743",
  },
  payload: {
    hasRead: false,
    messageType: 0,
    alarmId: 6467,
    createdTime: "2024-03-07 10:00:13",
    alarmIconUrl:
      "https://jiayuan.gongheyuan.com/resources/yc-hcp-test/product/dxalarm20230912.png",
    alarmTypeDesc: "紧急呼叫",
    detail:
      "【双桥恭和家园|2号楼|5层|2-502】【2502-吴菊梅】在【2号楼5层走廊】发生【一键报警】",
    areaType: 1,
    communityId: 1,
    communityName: "双桥恭和家园",
    buildingId: 2,
    buildingName: "2号楼",
    floorId: 8,
    floorName: "5层",
    houseId: 92,
    houseName: "2-502",
    residentId: 141,
    residentName: "吴菊梅",
    infoType: "ABNORMAL",
  },
};
