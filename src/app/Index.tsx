import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Dimensions, StatusBar } from "react-native";
import "../../global.css";
import React, { useEffect, useState } from "react";
import { getFontFamily } from "../assets/fonts/helper";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "../assets/styles/globalStyle";
import UserStory from "../components/UserStory/UserStory";
import Page from "@/src/app/Index";
import UserPost from "../components/UserPost/UserPost";
import { Link, useNavigation } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";

const Index = () => {
  const userStories = [
    {
      firstName: "Jacob",
      id: 1,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Anish",
      id: 2,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Shubham",
      id: 3,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Krutarth",
      id: 4,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Sanskar",
      id: 5,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Greeshma",
      id: 6,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Tanish",
      id: 7,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Aditi",
      id: 8,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Tanvi",
      id: 9,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Soham",
      id: 10,
      profileImage: require("../assets/Images/defaultImage.png"),
    },
  ];

  const userPost = [
    { firstName: "Anish", lastName: "Naik", location: "Pune", likes: 150, comments: 13, bookmarks: 3, id: 1, image: require("../assets/Images/defaultPost.png"), profileImage: require("../assets/Images/defaultImage.png") },
    {
      firstName: "Jacob",
      lastName: "Abraham",
      location: "Goa",
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 2,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Sophia",
      lastName: "Williams",
      location: "Mumbai",
      likes: 320,
      comments: 45,
      bookmarks: 12,
      id: 3,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Liam",
      lastName: "Smith",
      location: "Bangalore",
      likes: 500,
      comments: 75,
      bookmarks: 20,
      id: 4,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Olivia",
      lastName: "Johnson",
      location: "Chennai",
      likes: 250,
      comments: 30,
      bookmarks: 8,
      id: 5,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Ethan",
      lastName: "Brown",
      location: "Delhi",
      likes: 100,
      comments: 10,
      bookmarks: 2,
      id: 6,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Emma",
      lastName: "Davis",
      location: "Hyderabad",
      likes: 180,
      comments: 22,
      bookmarks: 4,
      id: 7,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "James",
      lastName: "Miller",
      location: "Kolkata",
      likes: 420,
      comments: 60,
      bookmarks: 15,
      id: 8,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Mia",
      lastName: "Martinez",
      location: "Ahmedabad",
      likes: 375,
      comments: 55,
      bookmarks: 10,
      id: 9,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Alexander",
      lastName: "Garcia",
      location: "Jaipur",
      likes: 280,
      comments: 40,
      bookmarks: 9,
      id: 10,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Amelia",
      lastName: "Rodriguez",
      location: "Lucknow",
      likes: 400,
      comments: 50,
      bookmarks: 14,
      id: 11,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Lucas",
      lastName: "Lee",
      location: "Surat",
      likes: 550,
      comments: 80,
      bookmarks: 25,
      id: 12,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Charlotte",
      lastName: "Wilson",
      location: "Pune",
      likes: 150,
      comments: 20,
      bookmarks: 5,
      id: 13,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Henry",
      lastName: "Taylor",
      location: "Indore",
      likes: 220,
      comments: 18,
      bookmarks: 7,
      id: 14,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
    {
      firstName: "Amos",
      lastName: "Scott",
      location: "Mumbai",
      likes: 100,
      comments: 10,
      bookmarks: 3,
      id: 15,
      image: require("../assets/Images/defaultPost.png"),
      profileImage: require("../assets/Images/defaultImage.png"),
    },
  ];

  const userStoriesPageSize = 5;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [userStoriesLoading, setUserStoriesIsLoading] = useState(false);

  const userPostPageSize = 3;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [userPostLoading, setUserPostIsLoading] = useState(false);

  const [screenData, setScreenData] = useState(Dimensions.get("screen"));
  console.log(screenData);
  const pagination = (database, currentPage, pageSize) => {
    console.log("current page: ", currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setUserStoriesIsLoading(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setUserStoriesIsLoading(false);

    setUserPostIsLoading(true);
    const getInitialDataPosts = pagination(userPost, 1, userPostPageSize);
    setUserPostRenderedData(getInitialDataPosts);
    setUserPostIsLoading(false);

    Dimensions.addEventListener("change", (results) => {
      setScreenData(results.screen);
    });
  }, []);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={{ marginLeft: 27, marginRight: 18, marginTop: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Title className="text-red-300" title="Let's Explore" type={1} />

                <TouchableOpacity onPress={() => navigation.navigate("Message")} style={globalStyle.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (userStoriesLoading) {
                      return;
                    }
                    setUserStoriesIsLoading(true);
                    const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData((prev) => [...prev, ...contentToAppend]);
                    }
                    setUserStoriesIsLoading(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStories}
                  renderItem={({ item }) => <UserStory key={"userStory" + item.id} firstName={item.firstName} profileImage={item.profileImage} />}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (userPostLoading) {
              return;
            }
            setUserPostIsLoading(true);
            const contentToAppend = pagination(userPost, userPostCurrentPage + 1, userPostPageSize);
            if (contentToAppend.length > 0) {
              setUserPostCurrentPage(userPostCurrentPage + 1);
              setUserPostRenderedData((prev) => [...prev, ...contentToAppend]);
            }
            setUserPostIsLoading(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostRenderedData}
          renderItem={({ item }) => <UserPost key={"userPost" + item.id} firstName={item.firstName} lastName={item.lastName} profileImage={item.profileImage} location={item.location} likes={item.likes} comments={item.comments} bookmarks={item.bookmarks} image={item.image} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
