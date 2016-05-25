function calculate_median(a) {
    var i, j = 0, mid;
    var mid_num;
    var arr = [];

    if (a.length > 1) {
        for (i = 0; i < a.length; i++) {
            if (i % 2 == 1) {
                arr[j] = a[i];
                j++;
            }
        }

        arr.sort(function compare(a, arr) {
            return (a - arr);
        });

        mid = parseInt(arr.length / 2);

        if (arr.length % 2 == 1) {
            mid_num = arr[mid];
        }
        else {
            mid_num = (arr[mid - 1] + arr[mid]) / 2;
        }

        return (mid_num);
    }
    else

        return ("error.");
}

module.exports = calculate_median;
