import MisjudgeTheTime from "../src";

describe("b問題", () => {
  describe(" h1 が 2 より小さいとき h2 が 6 以上", () => {
    test("h1 === 0 -> h1h2 + (10 - h1h2):00 を出力", () => {
      // 07:45
      const hm = [0, 7, 4, 5];

      const misjudeTheTime = new MisjudgeTheTime();
      expect(misjudeTheTime.jude(hm)).toBe("10 00");
    });

    test("h1 === 1 -> h1h2 + (20 - h1h2):00 を出力", () => {
      // 07:45
      const hm = [1, 7, 3, 5];

      const misjudeTheTime = new MisjudgeTheTime();
      expect(misjudeTheTime.jude(hm)).toBe("20 00");
    });
  });
  describe("h1 が 2 より小さい&h2 が 5 以下", () => {
    test("h1h2:m1m2 を出力", () => {
      // 05:45
      const hm = [0, 5, 4, 5];

      const misjudeTheTime = new MisjudgeTheTime();
      expect(misjudeTheTime.jude(hm)).toBe("5 45");
    });
  });

  describe("h1 が 2 の時 m1 が 4 以上", () => {
    test("h1h2 + 1 : 00 を出力", () => {
      // 22:45
      const hm = [2, 2, 4, 5];

      const misjudeTheTime = new MisjudgeTheTime();
      expect(misjudeTheTime.jude(hm)).toBe("23 00");
    });
    //  h1h2 が 24 の時 00 に変換して出力
    test("24:00 の時 00:00 に変換して出力", () => {
      // 23:45
      const hm = [2, 3, 4, 5];
      const misjudeTheTime = new MisjudgeTheTime();
      expect(misjudeTheTime.jude(hm)).toBe("00 00");
    });
  });
});
