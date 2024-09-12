ABC Company is looking for a solution that helps them to monitor or a way of knowing how their shipments are going without digging into too much detail and proactively update their customers to improve customer satisfaction. 

**Problem Breakdown:  **
- Customer satisfaction is compromised due to delays in responding back to customers with the latest information on shipping. 
- The current system/process does not allow to identify shipping delays, unless a customer raises a request and is manually tracked by admin/customer service team from one of their many carriers' data system. 
- This is not viable for a 1000 order/day schedule and the solution proposed should be scalable across multiple carriers for future needs.  
  
**Proposed Solution: **
A proposed solution is to implement an advanced delivery monitoring system called ABC-Delivery, that integrates with multiple carriers' data, providing real-time tracking and updates on all shipments. The dashboard in the system will proactively flag delays, categorize them (pre-configured as per requirements), allowing customer service teams to address issues before the customers reach out. Further additions such as Automated Alerts & Notifications will help the customer and the service teams to stay updated. In addition to this, a Predictive module developed can help ABC teams to assess carriers' performance etc. for continuous improvement in operations. 

ABC-Delivery will feature a centralized dashboard that: 

- Fetches and displays shipment statuses in real-time ("Shipped," "In Transit," "Delayed", "Overdue"). 
- Flags delayed shipments and offers summary views of delays and delivery times. 
- This dashboard comes with an information table where orders info can be seen in a summary. The table has pagination to make it user friendly.
- Automated Alerts & Notifications :Automated notifications via email/SMS will alert customers and customer service of delays, allowing proactive outreach with personalized updates.Customer service teams can filter through the status and send bulk automated emails from the system and add any complimentary discounts or concessions. etc. based on categories such RED, YELLOW, GREEN etc. based on delays. 

**Future Enhancements **
- Customer Support Integration: Provide an option to synchronize any CRM tools ABC company may have on the detail page.  
- Analytics Tool: A predictive module can be included which will use historical data and machine learning to forecast delays considering factors such as carrier performance, shipping times, weather forecasts etc. This data can be modelled in a way where later this predictive data is added into the table column providing insights to the customer service team for making informed decisions and notifying the customers. Carrier performance can also be tracked to make better business decisions ongoing. 
- Carrier Performance: Bar charts, relevant meantime calculators, Delay incidents trackers etc. for comparing the performance of different carriers. 
- Customer Satisfaction Metrics: Track how shipping performance affects customer satisfaction metrics (e.g., complaints, refund requests). 
- Bulk Email/SMS: Ability to send bulk messages to customers whose shipments are delayed. 
- Pre-built Templates: Provide email/SMS templates for common situations (e.g., "Apologies, your order is delayed," "Please see the discount code" etc.). 
- Details page & Export Function: Provide users to dig deep into the case based on ID and then provide to generate reports or add comments which is synchronized to CRM for further info.  

_**Challenge Comments:**_ Some more functions can be developed, which are not possible in the current challenge such as search, sort, details page for each case etc. due to lack of backend API Data. 
 
**Technologies Used: **
- Backend: NodeJS, Express for API handling, Axios for external API calls, and basic error handling. 
- Frontend: React with hooks for fetching and displaying data, basic styling using CS
  
**Technical Information: **
  **Backend (NodeJS): **
      - API Integration: Fetch shipment data using the provided /shipments API. 
      - Batch Processing: Since there are 1,000+ orders daily, implement pagination to fetch data in batches and process each shipment's status. 
      - Error Handling: Handle cases where API requests fail, time out, or return incomplete data. Retry mechanisms and logging should be implemented. 

**Frontend (React): **
       - Dashboard: Created a simple dashboard for ABC Fashion’s customer support team. The dashboard will display: 
       - A summary of shipping performance (e.g., % on-time vs delayed shipments). 
       - Individual shipment details (e.g., customer info, carrier, tracking status, days in transit). 
       - Filters for shipment status (e.g., delayed, on-time, delivered). 

**Deployment Plan: **
ABC-Delivery is not yet deployed but can be easily deployed using Heroku, as the system only pulls data and does not involve data insertion. This means the system is designed to fetch shipment information from carrier APIs in real-time and display it on a dashboard, without modifying or writing any data to external systems. Since it only requires reading data, the deployment process is straightforward and can be handled efficiently through Heroku’s cloud platform. 

Deployment Steps on Heroku: 
- Heroku login: Log in to Heroku with your credentials. 
- Heroku create: This command creates a new Heroku app that will host the ABC-Delivery system. 
- git push Heroku <branch name>: This pushes the code from the specified branch to the Heroku app, initiating the build and deployment process. 
- Once deployed, the system can be monitored and scaled as necessary to handle larger data volumes or additional features like automated notifications and predictive analytics.

How to run a project :

1. checkout to master branch
2. run npm install
3. clone the service node project -- git clone https://github.com/Navyayalamat/shipping-api.git
4. checkout to master branch
5. run the node project in port 10000
6. start the react server
   

