//what is Median?
//Median is the middle element of sorted array
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
     
        int total = nums1.length + nums2.length ;
        int mid = total/2;
         
        int[]  mergedArr = mergedArray( nums1, nums2 , mid);
        
        if( total%2 !=0 ) // total is odd
            return (double) mergedArr[mid];
        else  // total is even
            return ((double) mergedArr[mid] + mergedArr[mid-1])/2;
        
    }
    
   public int[] mergedArray(int[] n1, int[] n2, int mid)
   {
      int[] merged = new int[mid+1];
      int ptr1 = 0;
       int ptr2 = 0; 
       int ptr3 = 0; 
       
       if (n1.length == 0 ) return n2; 
       if (n2.length == 0 ) return n1;
       
       while(ptr1<n1.length && ptr2 < n2.length & ptr3 <= mid)
       {
          if(n1[ptr1] < n2[ptr2])
              merged[ptr3++] = n1[ptr1++];
           else
              merged[ptr3++] = n2[ptr2++]; 
       }
       
      while(ptr2<n2.length && ptr3 <=mid)
          merged[ptr3++] = n2[ptr2++];
       
       while(ptr1<n1.length && ptr3 <=mid)
          merged[ptr3++] = n1[ptr1++];
       
      return merged; 
       
   }
    
}
