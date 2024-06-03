import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Welcome to Arin Accounting Services. We specialize in tailored accounting solutions designed to optimize your financial performance. Explore our services below and let us help you achieve your business goals." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Income Tax Return Filing",
      description: "At Arin Accounting Services, we understand the complexities and nuances of income tax return filing. Our expert team is dedicated to making the process as simple and stress-free as possible for you. Whether you're an individual taxpayer or a business entity, we'll ensure that your tax returns are prepared accurately and filed on time, minimizing your tax liabilities while maximizing your potential refunds. With our attention to detail and commitment to excellence, you can trust us to handle your income tax return filing with precision and professionalism. Let us take the hassle out of tax season so you can focus on what matters most—growing your business and enjoying life to the fullest.",url:""
    },
    { imageSrc: SupportIconImage, title: "GST Return Filing",description:"At Arin Accounting Services, we understand the importance of timely and accurate GST return filing for your business. Our team of experts is dedicated to providing efficient GST return filing services that ensure compliance with regulations while maximizing your tax benefits. Whether you're a small business or a large corporation, we'll handle all aspects of GST return filing, from data compilation to submission, so you can focus on running your business. With our comprehensive knowledge and attention to detail, you can trust us to navigate the complexities of GST regulations and keep your business on track. Let us streamline your GST return filing process and help you stay ahead of deadlines with ease." ,url:""},
    { imageSrc: CustomizeIconImage, title: "TDS Return Filing",description:"Arin Accounting Services offers dependable TDS (Tax Deducted at Source) return filing solutions tailored to meet the diverse needs of businesses. Our experienced team ensures accurate and timely filing, helping you comply with regulatory requirements effortlessly. From data collection to submission, we handle every step of the process efficiently, saving you time and minimizing the risk of errors. With our expertise and attention to detail, you can trust us to manage your TDS return filing effectively, allowing you to focus on your core business activities. Stay compliant and avoid penalties with our reliable TDS return filing services." ,url:""},
    { imageSrc: ReliableIconImage, title: "Finalization of Accounts",description:"Arin Accounting Services offers streamlined finalization of accounts services designed to bring clarity and accuracy to your financial records. Our expert team meticulously examines your financial data, ensuring all transactions are accounted for and accurately reflected in your financial statements. We work closely with you to resolve any discrepancies and ensure compliance with accounting standards and regulations. With our comprehensive approach and attention to detail, you can trust us to provide reliable finalization of accounts services that give you a clear picture of your financial health. Let us take the complexity out of the process, allowing you to make informed decisions with confidence.",url:""},
    { imageSrc: FastIconImage, title: "Book Keeping",description:"Arin Accounting Services offers efficient and reliable bookkeeping services to help you maintain accurate financial records for your business. Our dedicated team ensures meticulous data entry, categorization, and reconciliation, providing you with up-to-date and organized financial information. With our bookkeeping services, you can streamline your accounting processes, track expenses, and monitor cash flow effectively. Whether you're a small business or a large corporation, we tailor our services to meet your specific needs, allowing you to focus on growing your business while we take care of the numbers. Trust Arin Accounting Services for reliable bookkeeping solutions that keep your finances in order." ,url:""},
    { imageSrc: SimpleIconImage, title: "Registration of GST" ,description:"Arin Accounting Services offers seamless GST registration services to businesses of all sizes. Our experienced team guides you through the entire registration process, ensuring compliance with GST regulations and requirements. We handle all documentation, submissions, and follow-ups, making the registration process hassle-free for you. Whether you're a new business seeking GST registration or an existing business looking to expand, we provide personalized assistance to meet your specific needs. Trust Arin Accounting Services to navigate the complexities of GST registration and get you registered efficiently, allowing you to focus on running your business with confidence.",url:""},
    { imageSrc: SimpleIconImage, title: "Payroll",description:"Arin Accounting Services offers efficient payroll management solutions tailored to meet the unique needs of your business. Our comprehensive services cover everything from employee onboarding to paycheck processing and tax filing, ensuring accurate and timely payments while staying compliant with all relevant regulations. We handle all aspects of payroll administration, including calculating wages, deducting taxes and benefits, and generating payroll reports. With our user-friendly systems, you can easily track employee hours, manage leave, and access payroll information anytime, anywhere. By outsourcing your payroll to Arin Accounting Services, you can streamline your payroll processes, reduce administrative burdens, and minimize the risk of errors, allowing you to focus on growing your business.",url:"" },
    { imageSrc: SimpleIconImage, title: "Filing VAT Return of Dubai",description:"Arin Accounting Services simplifies the process of VAT return filing in Dubai, ensuring compliance with local regulations and requirements. Our dedicated team handles all aspects of VAT return preparation and submission, alleviating the administrative burden on your business. We meticulously review your financial data, calculate VAT liabilities, and prepare accurate VAT returns on your behalf. With our expertise in Dubai's VAT laws and regulations, you can trust us to navigate the complexities of VAT return filing with precision and efficiency. Let Arin Accounting Services manage your VAT return filing, allowing you to focus on your core business activities with confidence.",url:"" },
    { imageSrc: SimpleIconImage, title: "Foreign Book Keeping",description:"Arin Accounting Services specializes in providing expert bookkeeping solutions tailored to businesses operating internationally. Our dedicated team understands the complexities of foreign bookkeeping, including currency conversions, international tax regulations, and compliance requirements. We meticulously maintain your financial records, ensuring accuracy and transparency across borders. Whether you're expanding into new markets or managing subsidiaries abroad, we offer personalized bookkeeping services to meet your specific needs and support your global operations. Trust Arin Accounting Services for reliable and professional foreign bookkeeping support, allowing you to focus on growing your business internationally with confidence.",url:""}
  ];

  const handleReadMore = (url) => {
    // Perform navigation to a different page or component using the provided URL
    window.location.href = url;
  };

  // Function to truncate the description
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + '...';
  };

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                {truncateDescription(card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.", 100)}
                 </p>
                 <button onClick={() => handleReadMore(card.url)}>Read More</button>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
