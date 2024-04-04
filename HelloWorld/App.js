import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );

      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setError("Fetch data something went wrong!");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading ...</Text>
      </View>
    );
  }

  handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  addPost = async () => {
    setIsPosting(true);
    console.log(postBody, postTitle);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    });
    const newPost = await response.json();
    setPostList([newPost, ...postList]);
    setPostBody("");
    setPostTitle("");
    setIsPosting(false);
  };

  return (
    <SafeAreaView>
      <View>
        {error ? (
          <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
        ) : (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                value={postTitle}
                onChangeText={setPostTitle}
                style={styles.input}
                placeholder="Enter post title"
              />
              <TextInput
                value={postBody}
                onChangeText={setPostBody}
                style={styles.input}
                placeholder="Enter post body"
              />
              <Button
                title={isPosting ? "Adding..." : "Add Post"}
                onPress={addPost}
                disabled={isPosting}
              />
            </View>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.body}</Text>
                  </View>
                );
              }}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              ListEmptyComponent={() => <Text>Not post found</Text>}
              ListHeaderComponent={() => (
                <Text style={styles.textHeader}>Post List</Text>
              )}
              ListFooterComponent={() => (
                <Text style={styles.textFooter}>End of the list</Text>
              )}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  textFooter: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    margin: 16,
    backgroundColor: "grey",
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    marginBottom: 8,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
