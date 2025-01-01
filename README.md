<b>Docker Hub</b>
</br>
Client: docker pull faizfaheem/cryptoexchange:client4.0
</br>
Server: docker pull faizfaheem/cryptoexchange:server4.0
</br>
SmartContract: docker pull faizfaheem/cryptoexchange:web34.0

<b>How to setup through docker:</b>
1. Pull the Docker images using the provided commands.
2. Run the container
3. Deploy SmartContract
   1. docker run hardhat-sepolia
   2. docker run --rm web3-container
   3. npx hardhat run scripts/deploy.js --network sepolia

<b>How to setup using GitHub:</b>
1. Clone the repository.
2. Run 'npm install' separately for client, server, and smart contract directories.
3. Deploy the smart contract to the Sepolia network.
4. Run 'npm run dev' in the client directory.
5. Run 'npm start' in the server directory.


<b>Results
Home Page:</b>
</br>
1. Displays the connected account in a card.
![image](https://github.com/user-attachments/assets/3c127c89-fa35-4096-9ad9-baecc3494ea5)

2. A form to add receiver’s address, amount in Ethereum, a keyword for the gif, and any text.
![image](https://github.com/user-attachments/assets/67f4ec8c-4c70-43c1-ac8b-e47e4d2a6eee)

3. Market page shows top 100 currencies with live data, search functionality for coins, and toggle between USD and INR.
![image](https://github.com/user-attachments/assets/f4d67eee-89b4-443b-bc8f-91cd65be588e)

4. Displays the latest transactions of the connected account, showing time and gif related to the entered keyword.
![image](https://github.com/user-attachments/assets/6c82498f-3f59-46df-a30b-23b511d0a311)

5. About page with project details.
![image](https://github.com/user-attachments/assets/76909b70-f746-472f-b6ce-88c33aa3d1b9)

6. Basic chatbot functionality.

7. Services section with features and a footer with contact info.
![image](https://github.com/user-attachments/assets/72de1a82-6477-4c19-9cc6-8e90f8fe7046)
