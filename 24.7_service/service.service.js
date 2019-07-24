module.service("serviceService", function(dataService) {
    

    this.getArray = function() {
        let fullA = []  
        for(i=0 ;i <  dataService['a'] ; i++) {
            fullA.push(i)
        }
        return fullA
    }
})