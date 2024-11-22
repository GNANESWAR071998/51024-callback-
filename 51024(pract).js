var products=["watch","bike","belt","laptops","mobiles"]
function addTocart(){
    var input=prompt("enter your product")
    if(input){
        for(elem of products){
            var itemFound=false;
            if(input==elem){
                console.log(`you have added ${input} item to the cart`);
                alert(`you have added ${input} item to the cart`)
                itemFound=true;
                break;
                
            }
        }
        if(!itemFound){
            alert(`we don't have ${input} item in our basket`)
        }
    }else{
        alert("please select one item and add it to the cart")
    }
    }