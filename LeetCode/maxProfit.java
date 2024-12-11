class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit =0;
        int minPrice = Integer.MAX_VALUE;

        for(int price : prices){
            if(price<minPrice){
                minPrice = price;// 1
            }else{
                int currentProfit = price - minPrice; //3
                maxProfit = Math.max(maxProfit, currentProfit);//5
            }
        }

        return maxProfit;
    }
}

/**
7,1,5,3,6,4

1 => max(5,3) = 5
 */
