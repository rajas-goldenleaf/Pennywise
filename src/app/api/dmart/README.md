# API INFO

This D-mart website api endpoints does not have any authentication to it, it is open and free to access as of 7-05-2024

gettting products from its website requires some steps to be done is specific order 

1) **Get pincode Info** 
    - get servable stores details near that pincode
    - **POST** -->   `/pincodes/suggestions/`
    - **PARAMETERS/BODY** --> <br/>
        ```
                {
                    "searchText": "411030",
                    "sessionToken": "f238c2cb-dc57-4105-bc64-c215e3a870df",
                    "currentLocationPincode": "",
                    "currentLat": "",
                    "currentLng": ""
                }
        ```
        - here `searchText` is the pincode of the location
    - **RETURNS** --> 
        ```
                Object{
                    totalRecords: number,
                    searchResult: {
                        "uniqueId": string,
                        "pincode": string | number,
                        "apiMode": string | undefined,
                        "area": string,
                        "primaryText": string | number,
                        "secondaryText": string 
                    }[]
                }
        ```
    - **Ex** --> 
        ```
                {
                    "totalRecords": 7,
                    "searchResult": [
                        {
                            "uniqueId": "",
                            "pincode": "411030",
                            "apiMode": "",
                            "area": "Sadashiv Peth/Narayan Peth",
                            "primaryText": "411030",
                            "secondaryText": "Sadashiv Peth/Narayan Peth, Pune"
                        },
                        {..},{..},{..},{..},{..},{..},
                    ]
                }
        ```
2) **Get pincode Details**
    - **POST** -> `pincodes/details`
    - **PARAMETERS/BODY** -> 
        ```
                {
                    "uniqueId": "",
                    "apiMode": "",
                    "pincode": "411030",
                    "area": "Sadashiv Peth/Narayan Peth",
                    "currentLat": "",
                    "currentLng": ""
                }
        ```
    - after getting the pincode details which are **serverable** (which are in approximation to the provided pincode) get the store info by providing the desired results from 1)st response 
    - it would contains info such as 
        - Is Picode Serviceable
        - Wheather or not Pick Up from Store is Present or not
            - some stores are only for parcel based you cannot go there and pick up your parcel, they are only ment of home delivery
        - Wheather or not Home Delivery option is present or not in current store (*isHDEnabled*)
            - Home Delivery option is only avaiable through d-mart ready network and not through d-mart store
            - parcel would come at near by dmart ready store and from there home deivery or self pick up will be enabled
        - storeID **IMP** 
            - each d-mart ready store has been provided with store id which identifies the store in their network (any subsiquest requets would contain these store id and will filter products accordingly which are present in near by d-mart store)
        - state (state name)
        - region (city name)
        - storePincodeDetailsId
        - in case if the store is not present at current provided location then some message would be present else these will be empty strings.
        - unavailableIcon -> string
        - unavailableTitle -> title of the message modal.
        - unavailableMsg -> message to show to client in case of un-available.
        - suggestedPincode -> other alternative pincode options to select from based on provided pincode.

    - **RESPONSE** -> 
        ```
            {
                "pincode": "411030",
                "isPincodeServiceable": "true",
                "storePincodeDetails": {
                    "isPUPEnabled": "true",
                    "isHDEnabled": "true",
                    "pincode": "411030",
                    "area": "Sadashiv Peth/Narayan Peth",
                    "storeId": "10680",
                    "state": "Maharashtra",
                    "region": "Pune",
                    "storePincodeDetailsId": "15641"
                },
                "unavailableIcon": "",
                "unavailableTitle": "",
                "unavailableMsg": "",
                "suggestedPincode": []
            }
        ```
3) **get pick up store info based on storeId and pincode**
    - **GET** ->  `/pincodes/earliestslot/$pincode?storeId=$storeID`
    - **PARAMS** -> 
        ```
            $pincode = pincode (number)
            $storeID = storeID from previous request (number)
        ```
    - **RESPONSE** ->
        - resposne contains data such as pick up (*PUP*) and deliery/shipping (*SHIP*) timing in slots user can choose one option based on their needs
        ```
            Object{
                slots: {
                    Object{
                        "type": "SHP",
                        "slotId": string,
                        "timeSlot": "Tomorrow 10:00 AM - 12:30 PM",
                        "pincode": string,
                        "availability": "1" | "0", (boolean)
                        "slotArea": ""
                    },
                    Object{
                        type": "PUP",
                        "PUPData": [
                            {
                                "pupIdentifier": "AALQ",
                                "timeSlot": "Tomorrow 09:00 AM - 12:00 PM",
                                "slotId": "09001200-GEN",
                                "availability": "3",
                                "slotArea": "Narayan Peth"
                            },
                            {
                                "pupIdentifier": "AAMM",
                                "timeSlot": "Tomorrow 09:00 AM - 12:00 PM",
                                "slotId": "09001200-GEN",
                                "availability": "3",
                                "slotArea": "Dattawadi"
                            },
                            {
                                "pupIdentifier": "AAON",
                                "timeSlot": "Tomorrow 09:00 AM - 12:00 PM",
                                "slotId": "09001200-GEN",
                                "availability": "3",
                                "slotArea": "Sadashiv Peth"
                            }
                        ]
                    }
                }[]
            }
        ```
    - not much that of importance as it does not give any specific data about the location it just tells about delivery timing.

4) OPTIONAL
    5) get available store in current locality by name/pincode
        - **GET** -> `/pups/sadashiv` OR `/pups/411030`
            - sadashiv is the name of locality 
            - 411030 is the pincode 
        - **RESPONSE** -> 
            - response contains all d-mart ready store names and address and may more different data such as location
            ```

            ```