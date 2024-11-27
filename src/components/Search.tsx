import { View, Text, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native-gesture-handler";
import { getFontFamily } from "../assets/fonts/helper";
import { scaleFontSize } from "../assets/styles/scaling";

const Search = (props) => {
    const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const [search, setSearch]=useState('')
  const handleSearch = (searchValue)=>{
    setSearch(searchValue)
    props.onSearch(searchValue)
  }
  return (
    <Pressable style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, backgroundColor: "#FFFFFF", height: 50, borderRadius:15 }} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color='#25C0FF' size={22}/>
      <TextInput style={{ fontStyle:getFontFamily('Inter','300'),fontSize:scaleFontSize(14), lineHeight:scaleFontSize(14),color:'#000000', flex: 1, marginLeft: 6, height:'100%' }} ref={textInputRef} value={search} onChangeText={(value)=>handleSearch(value)}/>
    </Pressable>
  );
};

export default Search;
