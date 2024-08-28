interface TimeStampValueI {
  value: string;
  time: number;
}

class TimeMap {
  keyStore: Map<string, TimeStampValueI[]>;

  constructor() {
    this.keyStore = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    let timeStamps: TimeStampValueI[] | undefined = this.keyStore.get(key);
    const timeStamp: TimeStampValueI = { value: value, time: timestamp };

    if (!timeStamps) {
      timeStamps = [timeStamp];
      this.keyStore.set(key, timeStamps);
    } else {
      timeStamps.push(timeStamp);
    }
  }

  get(key: string, timestamp: number): string {
    const timeStamps: TimeStampValueI[] | undefined = this.keyStore.get(key);

    if (!timeStamps) return "";

    return this.binarySearchForTimeStamp(timestamp, timeStamps);
  }

  binarySearchForTimeStamp(timestamp: number, timeStamps: TimeStampValueI[]) {
    let left = 0;
    let right = timeStamps.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (timeStamps[mid].time <= timestamp) {
        result = timeStamps[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

console.log("TimeMap Running.");
let timeMap = new TimeMap();

timeMap.set("alice", "happy", 1); // store the key "alice" and value "happy" along with timestamp = 1.

console.log("--------------");
console.log(timeMap.get("alice", 1)); // return "happy"
console.log(timeMap.get("alice", 3)); // return "happy"
console.log("--------------");
console.log(timeMap.get("alice", 2)); // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
timeMap.set("alice", "sad", 3); // store the key "alice" and value "sad" along with timestamp = 3.
console.log(timeMap.get("alice", 3)); // return "sad"
