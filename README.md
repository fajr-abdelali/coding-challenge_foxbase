**Challenge Description**

Create a simple questionnaire with multiple pages.
Each page should contain different types of inputs such as buttons, text fields, checkboxes, etc.
The questionnaire should have a tree-structure navigation, where certain pages are only accessible based on the user's input on previous pages.
The configuration of the questionnaire should be done via a JSON object.
Implement a data storage system using a Prisma API connected to a database we provided.
Utilize the Apollo GraphQL client to send and load the data through the Prisma API.
Respond to the given inputs, generating a recommendation based on the provided inputs.

**Requirements**

1. Clean Code in your application ([Example Guideline](https://github.com/labs42io/clean-code-typescript))
2. Code must be written in TypeScript.
3. Implement the questionnaire functionality with multiple pages and inputs.
4. Create a tree-structured navigation system that enforces the logic described later in this ReadMe.
5. Use a JSON object to configure the questionnaire, defining the pages, inputs, navigation logic, and recommendation logic.
7. Use the Apollo GraphQL client to communicate with the Prisma API for sending and loading data.
8. Generate a recommendation based on the user's inputs, considering the provided logic.
9. Create a README.md file with instructions on how to run the application locally.
10. Fork this project and push your submission there.
11. Implement a testing strategy to ensure that your application works correctly.

---------------------------------------------------------------------------------------

**Matrix Recommendation Explanation**
|                   | Product A | Product B | Product C | Product D |
| --------        | --------- | --------- | --------- | --------- |
| Answer A   | 1         | 0         | 1         | 1         |
| Answer B   | 0         | 1         | 0         | 1         |
| Answer C   | 1         | 0         | 1         | 0         |

```
Answer A: given

Answer B: not given

Answer C: given

Product A: 1 * 1 = 1 <-- Recommend

Product B: 0 * 0 = 0 <-- Not Recommend

Product C: 1 * 1 = 1 <-- Recommend

Product D: 1 * 0 = 0 <-- Not Recommend

In essence, it's a Matrix x Vector multiplication
```

-----------------------------------------------------------------------------------------
** Tree Structure Logic**

The base of each questionnaire is the question or decision tree. A question tree consists of several question levels. These later lead the customer to the right product recommendation.

The logic of a question tree looks like this:

![DecisionTree](https://github.com/bukar1337/coding-challenge/assets/47776598/320d6ba3-922b-4abb-b76b-c447733a3d41)

-----------------------------------------------------------------------------------------
**Tipps**

- Please focus on sound architecture and a clean separation of concerns regarding your code ( do not put everything into one file)
- The Matrix Recommendation should be handled in the backend (Frontend creates the input vector, the backend uses the vector to calculate the result and returns the recommended products to the frontend)
- If you have any questions while doing the challenge create an issue in your repo where we can close the issue as soon I have given a sufficient answer to your question
- Product Data can be either gotten from here: https://fakestoreapi.com/ or similar free Apis
