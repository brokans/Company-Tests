import React from 'react'

function Payment(props) {

    function pay() {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const paymentBody = {
          api_username: "e36eb40f5ec87fa2",
          account_name: "EUR3D1", 
          amount: props.sum,
          order_reference: Math.random() * 999999,
          nonce: "a9b7f7e7" + Math.random() * 999999 + new Date(),
          timestamp: new Date(), 
          customer_url: "https://neti.ee",
        };
        const paymentHeader = {
          Authorization:
            "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
          "Content-Type": "application/json",
        };
    
        fetch(url, {
          method: "POST",
          body: JSON.stringify(paymentBody),
          headers: paymentHeader,
        })
          .then((res) => res.json())
          .then((json) => (window.location.href = json.payment_link));
      }
  return (
        <button onClick={pay}>Maksma</button>
  )
}

export default Payment