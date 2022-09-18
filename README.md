# Chalte Hai Application

The application was built using ReactJs and for storing the data IndexedDB is used. The db name is chalo

## The Application has following pages

- /: Home page
- /createroute: Create Route page
- /routes: Routes page
- /route/:routeId: Particular Route Page
- /editroute/:routeId: Edit Route Page
- /bulkupload: Bulk Upload Page

## The Application contains the following features

- Add a Route
- View all the Added Routes
- Edit the Routes
- Remove the Routes
- View A Particular Route along with the map view having the route direction
- Import a excel sheet having bus details and upload the data to DB
- Export all the bus data to the system in xlsx format. (File name: Bus_Data_2022-09-18T19_27_59.118Z.xlsx)

## Add Route Feature

- User can add a new Bus Number
- User can add a same Bus Number which already exists but with different direction(UP/DOWN)
- User can add multiple stops for the bus.(Atleast 2)
- User can even drag and drop the stops to change their positions
- In Mobile user has to select the stops to change position and then select the desired position
- User needs to fill all the details of the stops

## View Routes Feature

- User can see the list of all the buses list with bus number, bus direction and bus status
- User can search for the bus by bus number only

## View Particular Route Feature

- User can click on any of the bus in the view routes page to view the detail of that bus
- User can see the Bus Details along with the Stop Details
- User can also see the Map with the direction from the source to destination

## Edit Route Feature

- User can edit the route by clicking on the edit icon on view routes page
- User can edit any of the fields

## Remove Route Feature

- User can delete the route by clicking on the remove icon on view routes page
- User will get a confirmation before deleting the route

## Import Data Feature

- User can import the bus detail data from xlsx file
- There is a template which user has to follow to import data

## Export Data Feature

- User can export all the bus details data into xlsx file
