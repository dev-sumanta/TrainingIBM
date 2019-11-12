(() => {


    window.name = "XYZ"

    function SampleFunction(a, b, c, d) {
        alert(this.name)
    }

    var obj1 = {
        name: "Mayank"
    }

    var obj2 = {
        name: "V"
    }

    SampleFunction.bind(obj1)()



    
})()