import CheckoutStepper from './Components/Stepper'
function App() {
const   CHECKOUT_STEPS = [
  {
    name: "Customer Info ", 
    component: () => <div>Provider your contact details </div>

  }, 
  {
    name: "Shipping Info ", 
    component: () => <div> Enter your shipping address  </div>
  }, 
  {
    name: "Payment", 
    component: () => <div> Complete pyament for your order  </div>
  }, 
  {
    name: "Delivered", 
    component: () => <div> Your order has been delivered </div>
  }
]
  return (
  <>
        <h3 style={{color:"green",textAlign:"center", fontSize: "3.5rem"}}>Checkout</h3>

       <CheckoutStepper stepsConfig={CHECKOUT_STEPS}></CheckoutStepper>
  </>
  )
}

export default App
