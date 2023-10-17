import React from 'react'

function Payment(props) {

    function pay() {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const paymentBody = {
          api_username: "e36eb40f5ec87fa2", // turvaelement
          account_name: "EUR3D1", // konto
        //  Saadetud väärtus props'st võtan võtme sum, et failid oleks sünkroonis
          amount: props.sum, // tellimuse summa
          order_reference: Math.random() * 999999, // tellimuse number
          nonce: "a9b7f7e7" + Math.random() * 999999 + new Date(), // turvaelement
          timestamp: new Date(), // turvaelement
          customer_url: "https://neti.ee", // kuhu tagasi suunatakse
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