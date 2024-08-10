# LeetCodeProblemSolving

<div style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/971ffb3a-316e-494a-b97d-7813abc793c5" alt="Image Description" />
</div>



## ASCII

- Using 'a': char_counts['a']++ works because 'a' is automatically converted to its ASCII value (97).
- The 128 ASCII characters are a set of characters defined by the American Standard Code for Information Interchange (ASCII). ASCII represents text in computers and other devices that use text.

```csharp
//This code only increments counts for characters in the ranges A-Z and a-z
int[] char_counts = new int[128];
foreach (char c in s.ToCharArray()) {
    if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
        char_counts[c]++;
    }
}
```
