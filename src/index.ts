type TimeHM = number[];

class MisjudgeTheTime {
  public jude(timeHM: TimeHM) {
    const [h1, h2, m1, m2] = timeHM;

    if (h1 < 2 && h2 <= 5) {
      return (
        Number(String(h1) + String(h2)) + " " + Number(String(m1) + String(m2))
      );
    }

    if (h2 >= 6) {
      // h1h2 + (10 - h1h2):m1m2
      if (h1 === 0) {
        const nextMisjudeTimeH =
          Number(String(h1) + String(h2)) +
          (10 - Number(String(h1) + String(h2)));

        const nextMisjudeTimeM = Number(String(m1) + String(m2));
        return nextMisjudeTimeH + " " + "00";
      }

      // h1h2 + (20 - h1h2):m1m2 を出力
      if (h1 === 1) {
        const nextMisjudeTimeH =
          Number(String(h1) + String(h2)) +
          (20 - Number(String(h1) + String(h2)));
        const nextMisjudeTimeM = Number(String(m1) + String(m2));
        return nextMisjudeTimeH + " " + "00";
      }
    }

    //h1 が 2 の時 m1 が 4 以上
    if (h1 === 2) {
      if (m1 >= 4) {
        // h1h2 + 1 : 00 を出力
        const i =
          Number(String(h1) + String(h2)) + 1 === 24
            ? "00"
            : Number(String(h1) + String(h2)) + 1;

        return i + " " + "00";
      }
      return (
        Number(String(h1) + String(h2)) + " " + Number(String(m1) + String(m2))
      );
    }
  }
}

export default MisjudgeTheTime;
