import { BasePage } from '@/shared/components';

function CheckoutPage() {
  return (
    <BasePage pageName="Checkout">
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Enter your full name'/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder='Enter your email'/>
        </div>
        <div>
          <label htmlFor="phone">Email:</label>
          <input type="text" id="phone" name="phone" placeholder='Enter your phone n
          umber'/>
        </div>
      </form>
    </BasePage>
  );
}

export default CheckoutPage;
