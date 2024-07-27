class Solution {
    public int[] productExceptSelf(int[] arr) {
        int n = arr.length;
        int mulLeft[] = new int[n];
        int mulRight[] = new int[n];
        int result[] = new int[n];

        // Left multiplication
        mulLeft[0] = 1;
        for (int i = 1; i < n; i++) {
            mulLeft[i] = mulLeft[i - 1] * arr[i - 1];
        }

        // Right multiplication
        mulRight[n - 1] = 1;
        for (int j = n - 2; j >= 0; j--) {
            mulRight[j] = mulRight[j + 1] * arr[j + 1];
        }

        // Combine left and right products
        for (int i = 0; i < n; i++) {
            result[i] = mulLeft[i] * mulRight[i];
        }

        return result;
    }
}
