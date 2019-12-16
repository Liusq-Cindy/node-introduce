module.exports  = {
  // ------ 用户信息类 ------

  // 身份证
  isIdCard(value, errorMsg) {
    // 15或18位,, 最后1位校验码(数字或X/x)
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
      ? ''
      : errorMsg;
  },
  // 护照
  isPassport(value, errorMsg) {
    // 九位数的字母或数字组合
    return /^[a-zA-Z0-9]{9}$/.test(value) ? '' : errorMsg;
  },
  // 手机号码
  isMoblie(value, errorMsg) {
    return /^(1[3|4|5|6|7|8|9])\d{9}$/.test(value) ? '' : errorMsg;
  },
  // 邮箱
  isEmail(value, errorMsg) {
    return /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
      ? ''
      : errorMsg;
  },
  // 姓名
  isName(value, errorMsg) {
    return /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/.test(value)
      ? ''
      : errorMsg;
  },

  // ------ 体征类 ------

  // 血压
  bloodPressure(value, errorMsg) {
    // 正整数, 范围: 1-300
    return /^[1-9]\d*$/.test(value) && value <= 300 ? '' : errorMsg;
  },
  // 血糖
  bloodSugar(value, errorMsg) {
    // 正数, 保留到小数点后两位, 范围: 0-99.99
    return /^\d{1,2}(\.\d{1,2})?$/.test(value) ? '' : errorMsg;
  },
  // 血氧饱和度
  oxygenSaturation(value, errorMsg) {
    // 正整数, 范围: 1-100
    return /^[1-9]\d*$/.test(value) && value <= 100 ? '' : errorMsg;
  },
  // 脉搏
  pulse(value, errorMsg) {
    // 正整数, 范围: 1-200
    return /^[1-9]\d*$/.test(value) && value <= 200 ? '' : errorMsg;
  },
  // 呼吸
  breath(value, errorMsg) {
    // 正整数, 范围: 1-100
    return /^[1-9]\d*$/.test(value) && value <= 100 ? '' : errorMsg;
  },
  // 身高
  height(value, errorMsg) {
    // 正数, 保留小数点后一位, 范围：1-999.9
    return /^[1-9]\d{0,2}(\.\d{1})?$/.test(value) ? '' : errorMsg;
  },
  // BMI
  bmi(value, errorMsg) {
    // 保留小数点后一位, 范围: 1-99.9
    return /^[1-9]\d{0,1}(\.\d{1})?$/.test(value) ? '' : errorMsg;
  },
  // 体重
  weight(value, errorMsg) {
    // 保留小数点后一位, 范围：1-999.9
    return /^[1-9]\d{0,2}(\.\d{1})?$/.test(value) ? '' : errorMsg;
  },
  // 腰围
  waistline(value, errorMsg) {
    // 保留小数点后一位, 范围: 1-999.9
    return /^[1-9]\d{0,2}(\.\d{1})?$/.test(value) ? '' : errorMsg;
  },
  // 体温
  temperature(value, errorMsg) {
    // 保留小数点后一位, 范围: 34.0-43.0
    return /^\d+(\.\d{1})?$/.test(value) && value >= 34 && value <= 43
      ? ''
      : errorMsg;
  },

  // ------ 药物类 ------
  // 药物单次用量
  drugDosage(value, errorMsg) {
    // 正数，最多小数点后四位, 范围: 1-10000
    return /^([1-9]\d{0,3}(\.\d{1,4})?|10000)$/.test(value)
      ? ''
      : errorMsg;
  },
  // 用药次数
  drugTimes(value, errorMsg) {
    // 正整数, 范围: 1-10000
    return /^([1-9]\d{0,3}?|10000)$/.test(value) ? '' : errorMsg;
  },
  // 用药频率
  drugFrequency(value, errorMsg) {
    // 正整数, 范围: 1-10000
    return /^([1-9]\d{0,3}?|10000)$/.test(value) ? '' : errorMsg;
  },

  // ------ 其他 ------

  // 正整数
  positiveInteger(value, errorMsg) {
    return /^[1-9]\d*$/.test(value) ? '' : errorMsg;
  },
  // 包含中文字
  hasZh(value, errorMsg) {
    return /[\u4e00-\u9fa5]/.test(value) ? '' : errorMsg;
  },
  // 纯中文能为空
  isZh(value, errorMsg) {
    return /^[\u4e00-\u9fa5]*$/.test(value) ? '' : errorMsg;
  },
  // 纯中文带标点，能为空
  isZhdot(value, errorMsg) {
    return  /^[^\x00-\xff]*$/.test(value) ? '' : errorMsg;
  },
  // 包含英文字
    hasEn(value, errorMsg) {
      return  /[a-zA-Z]/.test(value) ? '' : errorMsg;
    },
  // 纯英文字
  isEn(value, errorMsg) {
    return  /^[a-zA-Z]*$/.test(value) ? '' : errorMsg;
  },
  // 不能为空
  isNonEmpty(value, errorMsg) {
    return value === '' ? errorMsg : '';
  },
  // 字符串最大长度
  maxLength(value, length, errorMsg) {
    return value.length < length ? errorMsg : '';
  },
  // 中英文及标点，不能输入表情
  noEmoji(value, errorMsg) {
    return /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/.test(value) ?  errorMsg : '';
  },
};
