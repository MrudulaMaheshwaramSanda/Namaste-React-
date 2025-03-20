import RestaurantCard  from "./RestaurantCard";
import dataObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


//When we have hard coded data, neer keep it in components file
// const dataObj = [
//     {
//     "storeUuid": "060890b5-b82d-5bd4-92c5-6880be3d37a5",
//     "title": {
//         "text": "Domino's"
//     },
//     "meta": [
//         {
//             "text": "$0.99 Delivery Fee",
//             "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
//             "accessibilityText": "$0.99 Delivery Fee",
//             "badgeType": "FARE",
//             "badgeData": {
//                 "fare": {
//                     "isSurge": false,
//                     "deliveryFee": "$0.99 Delivery Fee",
//                     "serviceFee": ""
//                 },
//                 "type": "fare"
//             }
//         },
//         {
//             "text": "20 min",
//             "accessibilityText": "Delivered in 20 to 20 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.5",
//         "accessibilityText": "Rated 4.5 out of 5 stars based on more than 180 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/dominos-ste-300-2510-marsha-sharp-fwy/BgiQtbgtW9SSxWiAvj03pQ?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/20fa9288fdc01be28055baedd768dc37.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/63d18745892c100be9e4ef3c560c9204.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
//             "text": " Top Offer • Free Item (Spend $9)",
//             "textColor": {
//                 "color": "#FFFFFF"
//             },
//             "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Free Item (Spend $9)</span>"
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "0.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "060890b5-b82d-5bd4-92c5-6880be3d37a5",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.011268389411270618,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.03118537585251033,
//                     "NetInflowPredictionScore": 26.532716751098633,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.03118537585251033,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.011268389411270618,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.08697923272848129,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 26.532716751098633,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 2118,
//                     "t120d_request_count": 382
//                 },
//                 "total": 0.03118537585251033
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 20,
//                     "max": 20,
//                     "raw": 20
//                 }
//             },
//             "fareInfo": {
//                 "serviceFee": 0.99,
//                 "dynamicBookingFeeTier": 0,
//                 "actualServiceFee": {
//                     "high": 0,
//                     "low": 99,
//                     "unsigned": false
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.49222797927461,
//                 "ratingCount": "180+"
//             },
//             "promotionUUID": "1a798d43-2732-4175-afde-b2dc3eb36d5f",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "baa7ca40-8bc4-406a-b66e-fbbc77f2d5da",
//                 "promotionUUIDs": [
//                     "1a798d43-2732-4175-afde-b2dc3eb36d5f"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_min_basket"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5936,
//         "longitude": -101.8717,
//         "zIndex": 9956,
//         "description": {
//             "title": "Domino's",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.5",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "f6cadf4a-dad2-557f-96e9-92a4fb83e195",
//     "title": {
//         "text": "Hawaiian Bros Lubbock"
//     },
//     "meta": [
//         {
//             "text": "30 min",
//             "accessibilityText": "Delivered in 30 to 30 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.8",
//         "accessibilityText": "A top rated restaurant with 4.8 out of 5 stars based on more than 1,000 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/hawaiian-bros-lubbock/9srfStrSVX-W6ZKk-4PhlQ?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c96c7017ca9ccfde7d19f0156984a578/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c96c7017ca9ccfde7d19f0156984a578/cc592037c936600295e9961933037e19.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c96c7017ca9ccfde7d19f0156984a578/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c96c7017ca9ccfde7d19f0156984a578/0c09274e3b12c8246a05970e1ef9d835.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c96c7017ca9ccfde7d19f0156984a578/7835428b286acb57646a256c897c0e9e.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c96c7017ca9ccfde7d19f0156984a578/fa23f51b9c499b035a68831c96e1821e.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
//             "text": " Top Offer • Buy 1, Get 1 Free",
//             "textColor": {
//                 "color": "#FFFFFF"
//             },
//             "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Buy 1, Get 1 Free</span>"
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "0.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "f6cadf4a-dad2-557f-96e9-92a4fb83e195",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.011710671707987785,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.028757913280278442,
//                     "NetInflowPredictionScore": 34.975772857666016,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.028757913280278442,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.011710671707987785,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.04474961385130882,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 34.975772857666016,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 22115,
//                     "t120d_request_count": 4303
//                 },
//                 "total": 0.028757913280278442
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 30,
//                     "max": 30,
//                     "raw": 30
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.768701376421306,
//                 "ratingCount": "1,000+"
//             },
//             "promotionUUID": "2942042a-daf9-48d5-93d4-baaab7c81ee2",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "5dc1849d-148e-4efa-8bb1-1272698f7be7",
//                 "promotionUUIDs": [
//                     "2942042a-daf9-48d5-93d4-baaab7c81ee2"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_cart_item_constraint"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5439,
//         "longitude": -101.922,
//         "zIndex": 9955,
//         "description": {
//             "title": "Hawaiian Bros Lubbock",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.8",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "4f0adb27-adf5-4bed-83bf-4128cd43e52c",
//     "title": {
//         "text": "IHOP"
//     },
//     "meta": [
//         {
//             "text": "30 min",
//             "accessibilityText": "Delivered in 30 to 30 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.1",
//         "accessibilityText": "Rated 4.1 out of 5 stars based on more than 2,000 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/ihop-university-ave/TwrbJ631S-2Dv0EozUPlLA?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2f894ab2c82f077afaa892064475543f/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2f894ab2c82f077afaa892064475543f/cc592037c936600295e9961933037e19.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2f894ab2c82f077afaa892064475543f/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2f894ab2c82f077afaa892064475543f/0c09274e3b12c8246a05970e1ef9d835.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2f894ab2c82f077afaa892064475543f/7835428b286acb57646a256c897c0e9e.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2f894ab2c82f077afaa892064475543f/fa23f51b9c499b035a68831c96e1821e.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "2 Offers Available",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "0.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "4f0adb27-adf5-4bed-83bf-4128cd43e52c",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.008825020864605904,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.02124277053400874,
//                     "NetInflowPredictionScore": 28.627002716064453,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.02124277053400874,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.008825020864605904,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.028362195938825607,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 28.627002716064453,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 7099,
//                     "t120d_request_count": 708
//                 },
//                 "total": 0.02124277053400874
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 30,
//                     "max": 30,
//                     "raw": 30
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.0814606741573005,
//                 "ratingCount": "2,000+"
//             },
//             "promotionUUID": "795b6e79-09cc-42dc-a837-7463326f2dc3",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "515d8a69-d386-4d67-86c8-7e678a6e92fa",
//                 "promotionUUIDs": [
//                     "795b6e79-09cc-42dc-a837-7463326f2dc3",
//                     "aaca58e6-0f37-4f7b-9f64-4b728f726b77"
//                 ],
//                 "offerTypeCount": 2,
//                 "concatSignpost": "concurrent_offer.signpost.num.of.offers.available"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5785,
//         "longitude": -101.8703,
//         "zIndex": 9954,
//         "description": {
//             "title": "IHOP",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.1",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "edcbc107-70d0-5d8b-a6ce-40a6f261c014",
//     "title": {
//         "text": "Insomnia Cookies"
//     },
//     "meta": [
//         {
//             "text": "$3.99 Delivery Fee",
//             "textFormat": "<span><span style=\"color:#3a3a48\">$3.99 Delivery Fee</span></span>",
//             "accessibilityText": "$3.99 Delivery Fee",
//             "badgeType": "FARE",
//             "badgeData": {
//                 "fare": {
//                     "isSurge": false,
//                     "deliveryFee": "$3.99 Delivery Fee",
//                     "serviceFee": ""
//                 },
//                 "type": "fare"
//             }
//         },
//         {
//             "text": "30 min",
//             "accessibilityText": "Delivered in 30 to 30 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.4",
//         "accessibilityText": "Rated 4.4 out of 5 stars based on more than 600 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/insomnia-cookies-1301-university-ave/7cvBB3DQXYumzkCm8mHAFA?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4edc0ab4c3cb12ec83907e1d071a1c4/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4edc0ab4c3cb12ec83907e1d071a1c4/719c6bd2757b08684c0faae44d43159d.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4edc0ab4c3cb12ec83907e1d071a1c4/93b5fd796682c6d5302cd5bec164fe90.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4edc0ab4c3cb12ec83907e1d071a1c4/97e6648b3593c29cb4a6335f976e6d84.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4edc0ab4c3cb12ec83907e1d071a1c4/a70f5c9df440d10213e93244e9eb7cad.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4edc0ab4c3cb12ec83907e1d071a1c4/97ef7458dde62fa918635bc21265d9f5.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": null,
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "3.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "edcbc107-70d0-5d8b-a6ce-40a6f261c014",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.007042029406875372,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.017350620427168905,
//                     "NetInflowPredictionScore": 24.835634231567383,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.017350620427168905,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.007042029406875372,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.0276282150298357,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 24.835634231567383,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 5231,
//                     "t120d_request_count": 510
//                 },
//                 "total": 0.017350620427168905
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 30,
//                     "max": 30,
//                     "raw": 30
//                 }
//             },
//             "fareInfo": {
//                 "serviceFee": 3.99,
//                 "dynamicBookingFeeTier": 0,
//                 "actualServiceFee": {
//                     "high": 0,
//                     "low": 399,
//                     "unsigned": false
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.377821393523062,
//                 "ratingCount": "600+"
//             },
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5834,
//         "longitude": -101.8704,
//         "zIndex": 9953,
//         "description": {
//             "title": "Insomnia Cookies",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.4",
//             "size": "SPACING_UNIT_4X"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null
// },

// {
//     "storeUuid": "dfbedbaf-df0a-4b0b-9e0e-5e0f5a2d0400",
//     "title": {
//         "text": "Denny's"
//     },
//     "meta": [
//         {
//             "text": "40 min",
//             "accessibilityText": "Delivered in 40 to 40 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "3.9",
//         "accessibilityText": "Rated 3.9 out of 5 stars based on more than 1,000 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/dennys-4718-slide-rd/377br98KSwueDl4PWi0EAA?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/cc592037c936600295e9961933037e19.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/0c09274e3b12c8246a05970e1ef9d835.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/7835428b286acb57646a256c897c0e9e.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/fa23f51b9c499b035a68831c96e1821e.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "Buy 1, Get 1 Free",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "3.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "dfbedbaf-df0a-4b0b-9e0e-5e0f5a2d0400",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.002459112321957946,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.006121128259692341,
//                     "NetInflowPredictionScore": 29.52605628967285,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.006121128259692341,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.002459112321957946,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.01042545959353447,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 29.52605628967285,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 6849,
//                     "t120d_request_count": 390
//                 },
//                 "total": 0.006121128259692341
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 40,
//                     "max": 40,
//                     "raw": 40
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 3.930647628760843,
//                 "ratingCount": "1,000+"
//             },
//             "promotionUUID": "3a81d84c-76ed-4c07-8e77-c8b6756244ec",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "dc8419ab-e854-4fed-86ad-8ab6b907e0ca",
//                 "promotionUUIDs": [
//                     "3a81d84c-76ed-4c07-8e77-c8b6756244ec"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5498,
//         "longitude": -101.9229,
//         "zIndex": 9951,
//         "description": {
//             "title": "Denny's",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "3.9",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "e4aa7a99-4878-4e03-a79c-02f307ed57ca",
//     "title": {
//         "text": "The Burger Den"
//     },
//     "meta": [
//         {
//             "text": "40 min",
//             "accessibilityText": "Delivered in 40 to 40 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.0",
//         "accessibilityText": "Rated 4.0 out of 5 stars based on more than 340 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/the-burger-den-4718-slide-rd/5Kp6mUh4TgOnnALzB-1Xyg?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9b29d361f67fbb125ef3d1cbdc9407b2/fb86662148be855d931b37d6c1e5fcbe.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9b29d361f67fbb125ef3d1cbdc9407b2/783282f6131ef2258e5bcd87c46aa87e.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9b29d361f67fbb125ef3d1cbdc9407b2/8a42ee7a692dfa4155879820804a277f.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9b29d361f67fbb125ef3d1cbdc9407b2/fdf52d66534809b650058f41d517d74a.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9b29d361f67fbb125ef3d1cbdc9407b2/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9b29d361f67fbb125ef3d1cbdc9407b2/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "Buy 1, Get 1 Free",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "3.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "e4aa7a99-4878-4e03-a79c-02f307ed57ca",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.0013610641472041607,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.0034379529999569057,
//                     "NetInflowPredictionScore": 29.21282386779785,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.0034379529999569057,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.0013610641472041607,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.0063958135433495045,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 29.21282386779785,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 3276,
//                     "t120d_request_count": 109
//                 },
//                 "total": 0.0034379529999569057
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 40,
//                     "max": 40,
//                     "raw": 40
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 3.9853479853479845,
//                 "ratingCount": "340+"
//             },
//             "promotionUUID": "ad8dc98b-2785-43f6-b50a-9957e9a39587",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "6996803e-f6f0-4af2-8364-8712d06da518",
//                 "promotionUUIDs": [
//                     "ad8dc98b-2785-43f6-b50a-9957e9a39587"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5498,
//         "longitude": -101.9229,
//         "zIndex": 9950,
//         "description": {
//             "title": "The Burger Den",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.0",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "e6e0b241-9c81-59e0-8e93-f048039c6e67",
//     "title": {
//         "text": "Quick Track/LaMa"
//     },
//     "meta": [
//         {
//             "text": "35 min",
//             "accessibilityText": "Delivered in 35 to 35 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "3.3",
//         "accessibilityText": "Rated 3.3 out of 5 stars based on 38 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/quick-track-lama-2318-19th-st/5uCyQZyBWeCOk_BIA5xuZw?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1d42243c446b5c73c92bfe08e3c1c27e/aa13fff7e2466014ca51307be81e7738.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1d42243c446b5c73c92bfe08e3c1c27e/61e8d264e9409914f90881b13f54d0ac.jpeg",
//                 "width": 550,
//                 "height": 440
//             }
//         ]
//     },
//     "signposts": null,
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "3.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "e6e0b241-9c81-59e0-8e93-f048039c6e67",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.0010671090567484498,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.0028080033080186695,
//                     "NetInflowPredictionScore": 19.142627716064453,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.0028080033080186695,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.0010671090567484498,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.00642148545011878,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 19.142627716064453,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 4894,
//                     "t120d_request_count": 68
//                 },
//                 "total": 0.0028080033080186695
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 35,
//                     "max": 35,
//                     "raw": 35
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 3.3428571428571425,
//                 "ratingCount": "38"
//             },
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN"
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5781,
//         "longitude": -101.8671,
//         "zIndex": 9949,
//         "description": {
//             "title": "Quick Track/LaMa",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "3.3",
//             "size": "SPACING_UNIT_4X"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null
// },

// {
//     "storeUuid": "62e0ccb3-6f6d-5882-9ce2-1cda5ade10db",
//     "title": {
//         "text": "The Meltdown"
//     },
//     "meta": [
//         {
//             "text": "40 min",
//             "accessibilityText": "Delivered in 40 to 40 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "3.2",
//         "accessibilityText": "Rated 3.2 out of 5 stars based on more than 190 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/the-meltdown-4718-slide-rd/YuDMs29tWIKc4hzaWt4Q2w?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f0db537d1b00b22f1668bb7eb3cb2269/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f0db537d1b00b22f1668bb7eb3cb2269/719c6bd2757b08684c0faae44d43159d.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f0db537d1b00b22f1668bb7eb3cb2269/93b5fd796682c6d5302cd5bec164fe90.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f0db537d1b00b22f1668bb7eb3cb2269/97e6648b3593c29cb4a6335f976e6d84.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f0db537d1b00b22f1668bb7eb3cb2269/a70f5c9df440d10213e93244e9eb7cad.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f0db537d1b00b22f1668bb7eb3cb2269/97ef7458dde62fa918635bc21265d9f5.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "Buy 1, Get 1 Free",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "3.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "62e0ccb3-6f6d-5882-9ce2-1cda5ade10db",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.0008277217275463045,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.002135103298933245,
//                     "NetInflowPredictionScore": 27.236730575561523,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.002135103298933245,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.0008277217275463045,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.004443769808858633,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 27.236730575561523,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 3345,
//                     "t120d_request_count": 118
//                 },
//                 "total": 0.002135103298933245
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 40,
//                     "max": 40,
//                     "raw": 40
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 3.1642651296829944,
//                 "ratingCount": "190+"
//             },
//             "promotionUUID": "b6c94f34-80b9-45ed-b369-7f5448982ef9",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "60fda52f-c3d4-43f5-b04b-8ad530035dbb",
//                 "promotionUUIDs": [
//                     "b6c94f34-80b9-45ed-b369-7f5448982ef9"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5498,
//         "longitude": -101.9229,
//         "zIndex": 9948,
//         "description": {
//             "title": "The Meltdown",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "3.2",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "60921102-4ace-571c-8848-f9013064b2c5",
//     "title": {
//         "text": "Slo Roast"
//     },
//     "meta": [
//         {
//             "text": "40 min",
//             "accessibilityText": "Delivered in 40 to 40 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.6",
//         "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 240 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/slo-roast-lubbock/YJIRAkrOVxyISPkBMGSyxQ?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64d7a76de683a7221438dfd69595af79/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64d7a76de683a7221438dfd69595af79/719c6bd2757b08684c0faae44d43159d.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64d7a76de683a7221438dfd69595af79/93b5fd796682c6d5302cd5bec164fe90.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64d7a76de683a7221438dfd69595af79/97e6648b3593c29cb4a6335f976e6d84.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64d7a76de683a7221438dfd69595af79/a70f5c9df440d10213e93244e9eb7cad.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64d7a76de683a7221438dfd69595af79/97ef7458dde62fa918635bc21265d9f5.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
//             "text": " Top Offer • Spend $30, Save $8",
//             "textColor": {
//                 "color": "#FFFFFF"
//             },
//             "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Spend $30, Save $8</span>"
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "delivery_fee": "3.99",
//                 "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "60921102-4ace-571c-8848-f9013064b2c5",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.0006735877832397819,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.0017756229417864233,
//                     "NetInflowPredictionScore": 33.58443069458008,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.0017756229417864233,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.0006735877832397819,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.004092615097761154,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 33.58443069458008,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 1724,
//                     "t120d_request_count": 15
//                 },
//                 "total": 0.0017756229417864233
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 40,
//                     "max": 40,
//                     "raw": 40
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.558394160583941,
//                 "ratingCount": "240+"
//             },
//             "promotionUUID": "1710971b-f473-46fc-8fd6-6f349dd69344",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
//             "offerMetadata": {
//                 "analyticsUUID": "ae19b18a-4589-4525-ac9e-d20ad7decbab",
//                 "promotionUUIDs": [
//                     "1710971b-f473-46fc-8fd6-6f349dd69344"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "offer_quality.top_offer,store_promotion_badge"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5317,
//         "longitude": -101.9144,
//         "zIndex": 9947,
//         "description": {
//             "title": "Slo Roast",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.6",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "073b4d08-8d7a-4b06-a4c1-bbf6a645f36f",
//     "title": {
//         "text": "Taqueria Y Panaderia Guadalajara(1925 19th St)"
//     },
//     "meta": [
//         {
//             "text": "15 min",
//             "accessibilityText": "Delivered in 15 to 15 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.3",
//         "accessibilityText": "Rated 4.3 out of 5 stars based on more than 1,000 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/taqueria-y-panaderia-guadalajara1925-19th-st/BztNCI16Swakwbv2pkXzbw?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/242ba18232ad7d865591db9bd737321c/fb86662148be855d931b37d6c1e5fcbe.webp",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/242ba18232ad7d865591db9bd737321c/783282f6131ef2258e5bcd87c46aa87e.webp",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/242ba18232ad7d865591db9bd737321c/8a42ee7a692dfa4155879820804a277f.webp",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/242ba18232ad7d865591db9bd737321c/fdf52d66534809b650058f41d517d74a.webp",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/242ba18232ad7d865591db9bd737321c/9b3aae4cf90f897799a5ed357d60e09d.webp",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/242ba18232ad7d865591db9bd737321c/f6deb0afc24fee6f4bd31a35e6bcbd47.webp",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "$0 Delivery Fee (Spend $10)",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "tracingID": "a22a49cd-a6cc-453a-9f12-14624838e6a3"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "073b4d08-8d7a-4b06-a4c1-bbf6a645f36f",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.00686287134885788,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.01672153107821941,
//                     "NetInflowPredictionScore": 25.930492401123047,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.01672153107821941,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.00686287134885788,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.024579470977187157,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 25.930492401123047,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 7771,
//                     "t120d_request_count": 933
//                 },
//                 "total": 0.01672153107821941
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 15,
//                     "max": 15,
//                     "raw": 15
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.294506612410986,
//                 "ratingCount": "1,000+"
//             },
//             "promotionUUID": "31243304-daed-4374-9db3-1bd97d74c7cc",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN",
//             "offerMetadata": {
//                 "analyticsUUID": "d44f9a6a-2fb6-4ee2-aa81-0619ee8a6733",
//                 "promotionUUIDs": [
//                     "31243304-daed-4374-9db3-1bd97d74c7cc"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "promo.restaurant.zero_delivery_fee.min_basket.localized_currency"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5776,
//         "longitude": -101.8586,
//         "zIndex": 9879,
//         "description": {
//             "title": "Taqueria Y Panaderia Guadalajara(1925 19th St)",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.3",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "4c88f51a-1bcd-54ad-bcc4-622f7ae524fb",
//     "title": {
//         "text": "Wendy's"
//     },
//     "meta": [
//         {
//             "text": "10 min",
//             "accessibilityText": "Delivered in 10 to 10 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.0",
//         "accessibilityText": "Rated 4.0 out of 5 stars based on more than 290 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/wendys-212-university-ave/TIj1GhvNVK28xGIveuUk-w?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/cc592037c936600295e9961933037e19.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/0c09274e3b12c8246a05970e1ef9d835.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/7835428b286acb57646a256c897c0e9e.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/fa23f51b9c499b035a68831c96e1821e.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": null,
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "tracingID": "a3838571-127f-456a-948e-4591740c7610"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "4c88f51a-1bcd-54ad-bcc4-622f7ae524fb",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.00379313831217587,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.008996549497824162,
//                     "NetInflowPredictionScore": 17.543291091918945,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.008996549497824162,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.00379313831217587,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.010516276583075523,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 17.543291091918945,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 2693,
//                     "t120d_request_count": 192
//                 },
//                 "total": 0.008996549497824162
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 10,
//                     "max": 10,
//                     "raw": 10
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.018050541516245,
//                 "ratingCount": "290+"
//             },
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN"
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5953,
//         "longitude": -101.8709,
//         "zIndex": 9872,
//         "description": {
//             "title": "Wendy's",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.0",
//             "size": "SPACING_UNIT_4X"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null
// },

// {
//     "storeUuid": "56262c39-64dd-5f86-a035-2b0964896efa",
//     "title": {
//         "text": "Sunny & Fine's Breakfast Burritos"
//     },
//     "meta": [
//         {
//             "text": "30 min",
//             "accessibilityText": "Delivered in 30 to 30 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.7",
//         "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on 62 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/sunny-%26-fines-breakfast-burritos-6606-19th-st/ViYsOWTdX4agNSsJZIlu-g?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c8a0e2508af56c0529a2e7304053526/fb86662148be855d931b37d6c1e5fcbe.jpeg",
//                 "width": 2400,
//                 "height": 1920
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c8a0e2508af56c0529a2e7304053526/783282f6131ef2258e5bcd87c46aa87e.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c8a0e2508af56c0529a2e7304053526/8a42ee7a692dfa4155879820804a277f.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c8a0e2508af56c0529a2e7304053526/fdf52d66534809b650058f41d517d74a.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c8a0e2508af56c0529a2e7304053526/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c8a0e2508af56c0529a2e7304053526/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
//             "text": " Top Offer • Buy 1, Get 1 Free",
//             "textColor": {
//                 "color": "#FFFFFF"
//             },
//             "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Buy 1, Get 1 Free</span>"
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "tracingID": "a22a49cd-a6cc-453a-9f12-14624838e6a3"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "56262c39-64dd-5f86-a035-2b0964896efa",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.005261785350739956,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.013350566932931542,
//                     "NetInflowPredictionScore": 32.33067321777344,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.013350566932931542,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.005261785350739956,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.025471605360507965,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 32.33067321777344,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 3384,
//                     "t120d_request_count": 330
//                 },
//                 "total": 0.013350566932931542
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 30,
//                     "max": 30,
//                     "raw": 30
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.666666666666666,
//                 "ratingCount": "62"
//             },
//             "promotionUUID": "d42429b3-7640-4a9b-b7ce-292083844191",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN",
//             "offerMetadata": {
//                 "analyticsUUID": "70ed7e48-b555-4728-a86b-a3aa5a2e9959",
//                 "promotionUUIDs": [
//                     "d42429b3-7640-4a9b-b7ce-292083844191"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_cart_item_constraint"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5782,
//         "longitude": -101.9633,
//         "zIndex": 9877,
//         "description": {
//             "title": "Sunny & Fine's Breakfast Burritos",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.7",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "3c7b8246-ab61-430a-bdbc-ba5b5bd8da9d",
//     "title": {
//         "text": "Taco Bell"
//     },
//     "meta": [
//         {
//             "text": "10 min",
//             "accessibilityText": "Delivered in 10 to 10 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.2",
//         "accessibilityText": "Rated 4.2 out of 5 stars based on more than 2,000 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/taco-bell-402-ave-q/PHuCRqthQwq9vLpbW9janQ?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ac8ae1b713a9eb91a3f635a5d5e4fd5d/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ac8ae1b713a9eb91a3f635a5d5e4fd5d/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ac8ae1b713a9eb91a3f635a5d5e4fd5d/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ac8ae1b713a9eb91a3f635a5d5e4fd5d/20fa9288fdc01be28055baedd768dc37.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ac8ae1b713a9eb91a3f635a5d5e4fd5d/63d18745892c100be9e4ef3c560c9204.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ac8ae1b713a9eb91a3f635a5d5e4fd5d/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "Free Item (Spend $15)",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "tracingID": "a22a49cd-a6cc-453a-9f12-14624838e6a3"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "3c7b8246-ab61-430a-bdbc-ba5b5bd8da9d",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.005171909928321838,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.012216957211494446,
//                     "NetInflowPredictionScore": 17.12500762939453,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.012216957211494446,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.005171909928321838,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.013716885820031166,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 17.12500762939453,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 4444,
//                     "t120d_request_count": 1266
//                 },
//                 "total": 0.012216957211494446
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 10,
//                     "max": 10,
//                     "raw": 10
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.1996014613085295,
//                 "ratingCount": "2,000+"
//             },
//             "promotionUUID": "2c42d4c5-af88-4d20-9740-640c57f25b14",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN",
//             "offerMetadata": {
//                 "analyticsUUID": "38a8296d-4530-460f-90ae-46f3d1555e6b",
//                 "promotionUUIDs": [
//                     "2c42d4c5-af88-4d20-9740-640c57f25b14"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "promo.restaurant.free_item_with_min_basket"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.592,
//         "longitude": -101.8557,
//         "zIndex": 9876,
//         "description": {
//             "title": "Taco Bell",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.2",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// },

// {
//     "storeUuid": "07476796-1a72-470e-b154-dc6da803a90c",
//     "title": {
//         "text": "Starbucks"
//     },
//     "meta": [
//         {
//             "text": "15 min",
//             "accessibilityText": "Delivered in 15 to 15 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.7",
//         "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on more than 1,500 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/starbucks-loop-289-%26-34th/B0dnlhpyRw6xVNxtqAOpDA?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/534bcb86979b39000cdfdf1bae21ae5d/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/534bcb86979b39000cdfdf1bae21ae5d/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/534bcb86979b39000cdfdf1bae21ae5d/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/534bcb86979b39000cdfdf1bae21ae5d/20fa9288fdc01be28055baedd768dc37.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/534bcb86979b39000cdfdf1bae21ae5d/63d18745892c100be9e4ef3c560c9204.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/534bcb86979b39000cdfdf1bae21ae5d/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": null,
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "tracingID": "a22a49cd-a6cc-453a-9f12-14624838e6a3"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "07476796-1a72-470e-b154-dc6da803a90c",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.004975501913577318,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.011932955901138484,
//                     "NetInflowPredictionScore": 19.191442489624023,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.011932955901138484,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.004975501913577318,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.01544533483684063,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 19.191442489624023,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 746,
//                     "t120d_request_count": 129
//                 },
//                 "total": 0.011932955901138484
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 15,
//                     "max": 15,
//                     "raw": 15
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.733074361820199,
//                 "ratingCount": "1,500+"
//             },
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN"
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5644,
//         "longitude": -101.9448,
//         "zIndex": 9875,
//         "description": {
//             "title": "Starbucks",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.7",
//             "size": "SPACING_UNIT_4X"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null
// },

// {
//     "storeUuid": "7b769801-290f-488f-80bb-1887e348bc68",
//     "title": {
//         "text": "Cracker Barrel Old Country Store"
//     },
//     "meta": [
//         {
//             "text": "35 min",
//             "accessibilityText": "Delivered in 35 to 35 min",
//             "badgeType": "ETD"
//         }
//     ],
//     "rating": {
//         "text": "4.4",
//         "accessibilityText": "Rated 4.4 out of 5 stars based on more than 2,000 reviews.",
//         "badgeType": "RATINGS"
//     },
//     "actionUrl": "/store/cracker-barrel-old-country-store-5018-milwaukee-ave/e3aYASkPSI-AuxiH40i8aA?diningMode=DELIVERY",
//     "favorite": false,
//     "image": {
//         "items": [
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
//                 "width": 2880,
//                 "height": 2304
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
//                 "width": 1080,
//                 "height": 864
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
//                 "width": 750,
//                 "height": 600
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/20fa9288fdc01be28055baedd768dc37.jpeg",
//                 "width": 640,
//                 "height": 512
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/63d18745892c100be9e4ef3c560c9204.jpeg",
//                 "width": 550,
//                 "height": 440
//             },
//             {
//                 "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
//                 "width": 240,
//                 "height": 192
//             }
//         ]
//     },
//     "signposts": [
//         {
//             "backgroundColor": {
//                 "color": "#0E8345"
//             },
//             "text": "Spend $35, Save $5",
//             "textColor": {
//                 "color": "#FFFFFF"
//             }
//         }
//     ],
//     "tracking": {
//         "metaInfo": {
//             "pluginName": "StorefrontFeedPlugin",
//             "analyticsLabel": "store_front",
//             "verticalType": "UNKNOWN",
//             "category": "",
//             "subcategory": "",
//             "surfaceAreaV2": "HOME_FEED",
//             "additionalTrackingData": {
//                 "tracingID": "a22a49cd-a6cc-453a-9f12-14624838e6a3"
//             }
//         },
//         "storePayload": {
//             "storeUUID": "7b769801-290f-488f-80bb-1887e348bc68",
//             "isOrderable": true,
//             "score": {
//                 "breakdown": {
//                     "ConversionRatePredictionScore": 0.004628099035471678,
//                     "ConversionRateScoreCoefficient": 2.15,
//                     "FinalScore": 0.01141087752301246,
//                     "NetInflowPredictionScore": 31.327869415283203,
//                     "NetInflowScoreCoefficient": 0,
//                     "PredictionScore": 0.01141087752301246,
//                     "ServiceQualityPredictionScore": 0.949999988079071,
//                     "ServiceQualityScoreCoefficient": 0,
//                     "conversion_rate_boosting_factor": 2.15,
//                     "conversion_rate_partial_score": 0.004628099035471678,
//                     "ctr_boosting_factor": 0.08,
//                     "ctr_partial_score": 0.0182558074593544,
//                     "net_inflow_boosting_factor": 0,
//                     "net_inflow_partial_score": 31.327869415283203,
//                     "service_quality_boosting_factor": 0,
//                     "service_quality_partial_score": 0.949999988079071,
//                     "t120d_eyeball_count": 8059,
//                     "t120d_request_count": 915
//                 },
//                 "total": 0.01141087752301246
//             },
//             "etdInfo": {
//                 "dropoffETARange": {
//                     "min": 35,
//                     "max": 35,
//                     "raw": 35
//                 }
//             },
//             "ratingInfo": {
//                 "storeRatingScore": 4.363342898134861,
//                 "ratingCount": "2,000+"
//             },
//             "promotionUUID": "3a959247-3701-4f3c-bb75-5685637cd0db",
//             "scheduleTimeSlots": null,
//             "isDBF": true,
//             "storeAvailablityState": "UNKNOWN",
//             "offerMetadata": {
//                 "analyticsUUID": "729170bd-4785-4142-8b80-bc82ea7da88d",
//                 "promotionUUIDs": [
//                     "3a959247-3701-4f3c-bb75-5685637cd0db"
//                 ],
//                 "offerTypeCount": 1,
//                 "concatSignpost": "store_promotion_badge"
//             }
//         }
//     },
//     "mapMarker": {
//         "latitude": 33.5453,
//         "longitude": -101.9575,
//         "zIndex": 9873,
//         "description": {
//             "title": "Cracker Barrel Old Country Store",
//             "color": "CONTENT_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedColor": "CONTENT_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_PRIMARY"
//         },
//         "markerContent": {
//             "color": "CONTENT_PRIMARY",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
//             "text": "4.4",
//             "size": "SPACING_UNIT_4X"
//         },
//         "secondaryMarkerContent": {
//             "color": "CONTENT_POSITIVE",
//             "selectedColor": "CONTENT_INVERSE_PRIMARY",
//             "backgroundColor": "BACKGROUND_PRIMARY",
//             "selectedBackgroundColor": "BACKGROUND_POSITIVE",
//             "icon": "TAG"
//         }
//     },
//     "meta2": null,
//     "storyIconPayload": {
//         "isIconVisible": false
//     },
//     "endorsements": null,
//     "meta4": null,
//     "promotionConfiguration": {
//         "regularPromotionConfiguration": {}
//     }
// }
// ] 

const Body = () => {
    //local state variable - powerful variable 
     let [listOfRestaurants, setListofRestaurants] = useState([]);
     const[filteredRestaurants, setFilteredRestaurants] = useState([]); // we dont want to modify actual list because at time of search it will filter from the filtered restaurants

     const [searchText, setSearchText] = useState(""); //local state variable for search bar

     //Can also be used as array destructuring

    //  const arr = useState(resList); , useState returns an array
    //  const [listOfRestaurants, setListofRestaurants] = arr;

    //  const listOfRestaurants = arr[0];
    //  const setListofRestaurants = arr[1];

    useEffect(() =>{
         fetchData();
    }, []); //First body will be rendered then fetch will be called

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4075124&lng=78.4974931&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); //data is fetched from api by bypassing CORS policy with chrom extension
        const json = await data.json(); //converting readable stream to json


        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //fetching path of our restaurants card from api data
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Until data gets fetched from api and renders, display loading. but this is not a good way. So we need to go from shimmer UI

    // if(listOfRestaurants.length === 0){
    //     return <h1>Loading.......</h1>
    // }

    // this is called conditional rendering
        // if(listOfRestaurants.length===0){
        //     return <Shimmer />;
        // }
    

    //Normal JS variable
    // let listOfRestaurants = [
    //     {
    //         "storeUuid": "060890b5-b82d-5bd4-92c5-6880be3d37a5",
    //         "title": {
    //             "text": "Domino's"
    //         },
    //         "meta": [
    //             {
    //                 "text": "$0.99 Delivery Fee",
    //                 "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
    //                 "accessibilityText": "$0.99 Delivery Fee",
    //                 "badgeType": "FARE",
    //                 "badgeData": {
    //                     "fare": {
    //                         "isSurge": false,
    //                         "deliveryFee": "$0.99 Delivery Fee",
    //                         "serviceFee": ""
    //                     },
    //                     "type": "fare"
    //                 }
    //             },
    //             {
    //                 "text": "20 min",
    //                 "accessibilityText": "Delivered in 20 to 20 min",
    //                 "badgeType": "ETD"
    //             }
    //         ],
    //         "rating": {
    //             "text": "4.5",
    //             "accessibilityText": "Rated 4.5 out of 5 stars based on more than 180 reviews.",
    //             "badgeType": "RATINGS"
    //         },
    //         "actionUrl": "/store/dominos-ste-300-2510-marsha-sharp-fwy/BgiQtbgtW9SSxWiAvj03pQ?diningMode=DELIVERY",
    //         "favorite": false,
    //         "image": {
    //             "items": [
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
    //                     "width": 2880,
    //                     "height": 2304
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
    //                     "width": 1080,
    //                     "height": 864
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
    //                     "width": 750,
    //                     "height": 600
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/20fa9288fdc01be28055baedd768dc37.jpeg",
    //                     "width": 640,
    //                     "height": 512
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/63d18745892c100be9e4ef3c560c9204.jpeg",
    //                     "width": 550,
    //                     "height": 440
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/e4557cd71619a1f72ce8e0dacc8af007/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
    //                     "width": 240,
    //                     "height": 192
    //                 }
    //             ]
    //         },
    //         "signposts": [
    //             {
    //                 "backgroundColor": {
    //                     "color": "#0E8345"
    //                 },
    //                 "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
    //                 "text": " Top Offer • Free Item (Spend $9)",
    //                 "textColor": {
    //                     "color": "#FFFFFF"
    //                 },
    //                 "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Free Item (Spend $9)</span>"
    //             }
    //         ],
    //         "tracking": {
    //             "metaInfo": {
    //                 "pluginName": "StorefrontFeedPlugin",
    //                 "analyticsLabel": "store_front",
    //                 "verticalType": "UNKNOWN",
    //                 "category": "",
    //                 "subcategory": "",
    //                 "surfaceAreaV2": "HOME_FEED",
    //                 "additionalTrackingData": {
    //                     "delivery_fee": "0.99",
    //                     "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
    //                 }
    //             },
    //             "storePayload": {
    //                 "storeUUID": "060890b5-b82d-5bd4-92c5-6880be3d37a5",
    //                 "isOrderable": true,
    //                 "score": {
    //                     "breakdown": {
    //                         "ConversionRatePredictionScore": 0.011268389411270618,
    //                         "ConversionRateScoreCoefficient": 2.15,
    //                         "FinalScore": 0.03118537585251033,
    //                         "NetInflowPredictionScore": 26.532716751098633,
    //                         "NetInflowScoreCoefficient": 0,
    //                         "PredictionScore": 0.03118537585251033,
    //                         "ServiceQualityPredictionScore": 0.949999988079071,
    //                         "ServiceQualityScoreCoefficient": 0,
    //                         "conversion_rate_boosting_factor": 2.15,
    //                         "conversion_rate_partial_score": 0.011268389411270618,
    //                         "ctr_boosting_factor": 0.08,
    //                         "ctr_partial_score": 0.08697923272848129,
    //                         "net_inflow_boosting_factor": 0,
    //                         "net_inflow_partial_score": 26.532716751098633,
    //                         "service_quality_boosting_factor": 0,
    //                         "service_quality_partial_score": 0.949999988079071,
    //                         "t120d_eyeball_count": 2118,
    //                         "t120d_request_count": 382
    //                     },
    //                     "total": 0.03118537585251033
    //                 },
    //                 "etdInfo": {
    //                     "dropoffETARange": {
    //                         "min": 20,
    //                         "max": 20,
    //                         "raw": 20
    //                     }
    //                 },
    //                 "fareInfo": {
    //                     "serviceFee": 0.99,
    //                     "dynamicBookingFeeTier": 0,
    //                     "actualServiceFee": {
    //                         "high": 0,
    //                         "low": 99,
    //                         "unsigned": false
    //                     }
    //                 },
    //                 "ratingInfo": {
    //                     "storeRatingScore": 4.49222797927461,
    //                     "ratingCount": "180+"
    //                 },
    //                 "promotionUUID": "1a798d43-2732-4175-afde-b2dc3eb36d5f",
    //                 "scheduleTimeSlots": null,
    //                 "isDBF": true,
    //                 "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
    //                 "offerMetadata": {
    //                     "analyticsUUID": "baa7ca40-8bc4-406a-b66e-fbbc77f2d5da",
    //                     "promotionUUIDs": [
    //                         "1a798d43-2732-4175-afde-b2dc3eb36d5f"
    //                     ],
    //                     "offerTypeCount": 1,
    //                     "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_min_basket"
    //                 }
    //             }
    //         },
    //         "mapMarker": {
    //             "latitude": 33.5936,
    //             "longitude": -101.8717,
    //             "zIndex": 9956,
    //             "description": {
    //                 "title": "Domino's",
    //                 "color": "CONTENT_PRIMARY",
    //                 "backgroundColor": "BACKGROUND_PRIMARY",
    //                 "selectedColor": "CONTENT_PRIMARY",
    //                 "selectedBackgroundColor": "BACKGROUND_PRIMARY"
    //             },
    //             "markerContent": {
    //                 "color": "CONTENT_PRIMARY",
    //                 "selectedColor": "CONTENT_INVERSE_PRIMARY",
    //                 "backgroundColor": "BACKGROUND_PRIMARY",
    //                 "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
    //                 "text": "4.5",
    //                 "size": "SPACING_UNIT_4X"
    //             },
    //             "secondaryMarkerContent": {
    //                 "color": "CONTENT_POSITIVE",
    //                 "selectedColor": "CONTENT_INVERSE_PRIMARY",
    //                 "backgroundColor": "BACKGROUND_PRIMARY",
    //                 "selectedBackgroundColor": "BACKGROUND_POSITIVE",
    //                 "icon": "TAG"
    //             }
    //         },
    //         "meta2": null,
    //         "storyIconPayload": {
    //             "isIconVisible": false
    //         },
    //         "endorsements": null,
    //         "meta4": null,
    //         "promotionConfiguration": {
    //             "regularPromotionConfiguration": {}
    //         }
    //     },
    //     {
    //         "storeUuid": "dfbedbaf-df0a-4b0b-9e0e-5e0f5a2d0400",
    //         "title": {
    //             "text": "Denny's"
    //         },
    //         "meta": [
    //             {
    //                 "text": "40 min",
    //                 "accessibilityText": "Delivered in 40 to 40 min",
    //                 "badgeType": "ETD"
    //             }
    //         ],
    //         "rating": {
    //             "text": "3.9",
    //             "accessibilityText": "Rated 3.9 out of 5 stars based on more than 1,000 reviews.",
    //             "badgeType": "RATINGS"
    //         },
    //         "actionUrl": "/store/dennys-4718-slide-rd/377br98KSwueDl4PWi0EAA?diningMode=DELIVERY",
    //         "favorite": false,
    //         "image": {
    //             "items": [
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
    //                     "width": 2880,
    //                     "height": 2304
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/cc592037c936600295e9961933037e19.jpeg",
    //                     "width": 1080,
    //                     "height": 864
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
    //                     "width": 750,
    //                     "height": 600
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/0c09274e3b12c8246a05970e1ef9d835.jpeg",
    //                     "width": 640,
    //                     "height": 512
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/7835428b286acb57646a256c897c0e9e.jpeg",
    //                     "width": 550,
    //                     "height": 440
    //                 },
    //                 {
    //                     "url": "https://tb-static.uber.com/prod/image-proc/processed_images/32fb0164bae6227159bc05ffbb24d973/fa23f51b9c499b035a68831c96e1821e.jpeg",
    //                     "width": 240,
    //                     "height": 192
    //                 }
    //             ]
    //         },
    //         "signposts": [
    //             {
    //                 "backgroundColor": {
    //                     "color": "#0E8345"
    //                 },
    //                 "text": "Buy 1, Get 1 Free",
    //                 "textColor": {
    //                     "color": "#FFFFFF"
    //                 }
    //             }
    //         ],
    //         "tracking": {
    //             "metaInfo": {
    //                 "pluginName": "StorefrontFeedPlugin",
    //                 "analyticsLabel": "store_front",
    //                 "verticalType": "UNKNOWN",
    //                 "category": "",
    //                 "subcategory": "",
    //                 "surfaceAreaV2": "HOME_FEED",
    //                 "additionalTrackingData": {
    //                     "delivery_fee": "3.99",
    //                     "tracingID": "6d6c28da-5b89-43bd-8eb8-d29143301f87"
    //                 }
    //             },
    //             "storePayload": {
    //                 "storeUUID": "dfbedbaf-df0a-4b0b-9e0e-5e0f5a2d0400",
    //                 "isOrderable": true,
    //                 "score": {
    //                     "breakdown": {
    //                         "ConversionRatePredictionScore": 0.002459112321957946,
    //                         "ConversionRateScoreCoefficient": 2.15,
    //                         "FinalScore": 0.006121128259692341,
    //                         "NetInflowPredictionScore": 29.52605628967285,
    //                         "NetInflowScoreCoefficient": 0,
    //                         "PredictionScore": 0.006121128259692341,
    //                         "ServiceQualityPredictionScore": 0.949999988079071,
    //                         "ServiceQualityScoreCoefficient": 0,
    //                         "conversion_rate_boosting_factor": 2.15,
    //                         "conversion_rate_partial_score": 0.002459112321957946,
    //                         "ctr_boosting_factor": 0.08,
    //                         "ctr_partial_score": 0.01042545959353447,
    //                         "net_inflow_boosting_factor": 0,
    //                         "net_inflow_partial_score": 29.52605628967285,
    //                         "service_quality_boosting_factor": 0,
    //                         "service_quality_partial_score": 0.949999988079071,
    //                         "t120d_eyeball_count": 6849,
    //                         "t120d_request_count": 390
    //                     },
    //                     "total": 0.006121128259692341
    //                 },
    //                 "etdInfo": {
    //                     "dropoffETARange": {
    //                         "min": 40,
    //                         "max": 40,
    //                         "raw": 40
    //                     }
    //                 },
    //                 "ratingInfo": {
    //                     "storeRatingScore": 3.930647628760843,
    //                     "ratingCount": "1,000+"
    //                 },
    //                 "promotionUUID": "3a81d84c-76ed-4c07-8e77-c8b6756244ec",
    //                 "scheduleTimeSlots": null,
    //                 "isDBF": true,
    //                 "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
    //                 "offerMetadata": {
    //                     "analyticsUUID": "dc8419ab-e854-4fed-86ad-8ab6b907e0ca",
    //                     "promotionUUIDs": [
    //                         "3a81d84c-76ed-4c07-8e77-c8b6756244ec"
    //                     ],
    //                     "offerTypeCount": 1,
    //                     "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
    //                 }
    //             }
    //         },
    //         "mapMarker": {
    //             "latitude": 33.5498,
    //             "longitude": -101.9229,
    //             "zIndex": 9951,
    //             "description": {
    //                 "title": "Denny's",
    //                 "color": "CONTENT_PRIMARY",
    //                 "backgroundColor": "BACKGROUND_PRIMARY",
    //                 "selectedColor": "CONTENT_PRIMARY",
    //                 "selectedBackgroundColor": "BACKGROUND_PRIMARY"
    //             },
    //             "markerContent": {
    //                 "color": "CONTENT_PRIMARY",
    //                 "selectedColor": "CONTENT_INVERSE_PRIMARY",
    //                 "backgroundColor": "BACKGROUND_PRIMARY",
    //                 "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
    //                 "text": "3.9",
    //                 "size": "SPACING_UNIT_4X"
    //             },
    //             "secondaryMarkerContent": {
    //                 "color": "CONTENT_POSITIVE",
    //                 "selectedColor": "CONTENT_INVERSE_PRIMARY",
    //                 "backgroundColor": "BACKGROUND_PRIMARY",
    //                 "selectedBackgroundColor": "BACKGROUND_POSITIVE",
    //                 "icon": "TAG"
    //             }
    //         },
    //         "meta2": null,
    //         "storyIconPayload": {
    //             "isIconVisible": false
    //         },
    //         "endorsements": null,
    //         "meta4": null,
    //         "promotionConfiguration": {
    //             "regularPromotionConfiguration": {}
    //         }
    //     }

    // ]; 

    //conditional rendering using ternary operator
    return ((listOfRestaurants.length===0)? <Shimmer/> : (<div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="SearchBox" value={searchText} onChange={
                    (e) => {
                        setSearchText(e.target.value);  //updating the search text based on the value, for every key that we give in search box the whole body component will be re rendered as state variable is changing
                    }
                } placeholder="Type your fav Restaurant" />
                <button onClick = {() => {
                        const filterRestaurants = 
                            listOfRestaurants.filter((resturant) => (resturant.info.name.toLowerCase()).includes(searchText.toLowerCase())
                        );//Filter the restaurants and update the UI

                        setFilteredRestaurants(filterRestaurants);
                    }
                }>Search</button>
            </div>
            <button className="filter-btn" onClick={() => { 
                // console.log(listOfRestaurants);
                setListofRestaurants(
                     listOfRestaurants.filter((res) => Number(res.info.avgRating) > 4) //filtering restaurants whose rating > 4
                ); //listofrestaurants is updated and as state variable is updated the react re redenders whole component
            }}>Top Rated Restaurants</button>
        </div>
        
        <div className="RestroContainer">
            {
                filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {/* //When any card is clicked its related data willl be displayed */}
                    <RestaurantCard resData={restaurant} />  
                    {/* //This represents a config driven UI, Key is used to avoid re rendering of the UI whenever a new restaurant is added */}
                    </Link>

                ) )
            }
            
        </div>
    </div>)
    )
}

export default Body;