import React from 'react';


import { PaymentMethods } from '../../Sections/PaymentMethods/index';
import { ImportantInfo } from '../../Sections/ImportantInfo/index';
import { QualityDurability } from '../../Sections/QualityDurability/index';
import { Feedbacks } from '../../Sections/Feedbacks/index';
import { ChatWithMe } from '../../Sections/ChatWithMe/index';

export const OrderPage: React.FC = () => {
  return (
    <main className="w-full bg-main">
      <PaymentMethods />
      <ImportantInfo />
      <QualityDurability />
      <Feedbacks />
      <ChatWithMe />
    </main>
  );
};

export default OrderPage;