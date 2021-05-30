console.log('Connected')

const slider = document.querySelector('#myinput')
const text1 = document.querySelector('.text1')
const pageView = document.querySelector('.pageperview')
const checkBox = document.querySelector('#checbox')

const Check = () => {
    const checkBox = document.querySelector('#checbox')
    const text1 = document.querySelector('.text1')
    const yearly = document.querySelectorAll('.yearly')


    if (checkBox.checked == true) {
        text1.innerHTML =`$${(Number(text1.textContent.replace('$','')) *12 *0.25).toFixed(2)}`
        yearly.forEach((val, i, arr) => {
            val.classList.remove('d-none')
        })
        document.getElementById("myinput").oninput = function () {

            var value = (this.value - this.min) / (this.max - this.min) * 100
            this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
        
            pageView.innerHTML = (this.value < 1000) ? `${this.value}K` : `1M`
            
            text1.innerHTML = `$${calculatePrive(this.value)}`;
        
        
        };

        const calculatePrive = (val) => {
            let cost;
            if ((val) < 50) {
                cost = 8
            } else if ((val) < 100) {
                cost = 12
            } else if ((val) < 500) {
                cost = 16
            } else if ((val) < 1000) {
                cost = 24
            }
            else {
                cost = 36
            }
            return  (cost * 12 * 0.75).toFixed(2)
        }
        
        
    } else {
        text1.innerHTML = `$24.00`
        yearly.forEach((val, i, arr) => {
            val.classList.add('d-none')
        })

        document.getElementById("myinput").oninput = function () {

            var value = (this.value - this.min) / (this.max - this.min) * 100
            this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
        
            pageView.innerHTML = (this.value < 1000) ? `${this.value}K` : `1M`
            
            text1.innerHTML = `$${calculatePrive(this.value)}`;
        
        
        };
        const calculatePrive = (val) => {
            let cost;
            if ((val) < 50) {
                cost = 8
            } else if ((val) < 100) {
                cost = 12
            } else if ((val) < 500) {
                cost = 16
            } else if ((val) < 1000) {
                cost = 24
            }
            else {
                cost = 36
            }
            return cost.toFixed(2)
        }

     

    }
}


document.getElementById("myinput").oninput = function () {

    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'

    pageView.innerHTML = (this.value < 1000) ? `${this.value}K` : `1M`
    
    text1.innerHTML = `$${calculatePrive(this.value)}`;


};

const calculatePrive = (val) => {
    let cost;
    if ((val) < 50) {
        cost = 8
    } else if ((val) < 100) {
        cost = 12
    } else if ((val) < 500) {
        cost = 16
    } else if ((val) < 1000) {
        cost = 24
    }
    else {
        cost = 36
    }
    return cost.toFixed(2)
}


