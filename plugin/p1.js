(function(j){
    var obj = {
       sum: function(arr){
        var total = 0;
        j.each(arr,function(index, item){
           total += parseFloat(item);
        });
        return total;
    },
        avg: function(arr){
            return this.sum(arr)/arr.length;
    }
};
    j.mathUtils = obj;
})(jQuery);