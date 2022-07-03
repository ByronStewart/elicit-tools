# Elict Tools

This is an in house raid management tool for the Elicit guild on Frostmourne.

The purpose of this web app is to make rostering simpler and more efficient for farming raids by combining sim information with the loot tables from the instance to show relative item upgrades in a single position

The project utilises Angular as the component framework to simplify making the web app reactive.
RxJS is used in conjunction with AngularFire for AJAX requests and working with the Firebase Database

Firebase was chosen as a database host due to its realtime functionality and ability to communicate with the app without requiring a backend server.

\*\* Note this project simply consumes knowledge from the database. A seperate CLI tool was made to automate simulating characters and populating the database.

\*\* This project is no longer under active development
