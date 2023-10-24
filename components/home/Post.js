import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <HorizontalLine />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        {/*<Comments post={post} />*/}
      </View>
      
    </View>
  )
}

const PostHeader = ({ post }) => {
    return (
        <View 
            style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                margin: 5,                 
                alignItems: 'center',
                paddingLeft: 10,
            }}
        >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={post.profile_picture} style={styles.profilePicture}/>
                <Text style={{color: 'black', marginLeft: 5, fontWeight: '700'}}>
                    {post.user}
                </Text>
            </View>
        </View>
    )
   
};

const PostImage = ({post}) => (
    <View style={{
        width: '100%',
        height: 250,
    }}>
        <Image  
        source={post.imageUrl}
        style={{height: '100%'}}
        />
    </View>
) 

const PostFooter = ({ post }) => {
    return (
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image
                source={require('../../assets/like_image_icon.png')} 
                style={styles.footerIcon}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image
                source={require('../../assets/comment_icon.png')} 
                style={styles.footerIcon}
                />
            </TouchableOpacity>
        </View>
    )
   
}

const Likes = ({ post }) => (
    <View style={{flexDirection: 'row', marginTop: 4, paddingLeft: 5}}>
        <Text style={{fontWeight: '500'}}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{marginTop: 5, paddingLeft: 5}}>
        <Text>
            <Text style={{fontWeight: '600'}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
) 

const CommentSection = ({ post }) => (
    <View style={{marginTop: 5, paddingLeft: 5}}>
        {!!post.comments.length && (
        <Text style={{color: 'gray'}}>
            View{post.comments.length > 1 ? ' all ' : ' '} 
            {post.comments.length}{' '}
            {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
        )}
    </View>
)

/*
const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
                <Text>
                    <Text style={{fontWeight: '600'}}>{comment.user}</Text>
                    {' '}{comment.comment}
                </Text>
            </View>
        ))}
    </>
)
*/

/*
const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)*/

export const HorizontalLine = () => {
    return <View style={styles.lineStyle} />;
};


const styles = StyleSheet.create({
    lineStyle: {
      borderWidth: 1.5,
      borderColor: '#3D8AF7',  
      marginVertical: 10,
      orientation: 'vertical',
    },

    profilePicture: {
        width: 35,
        height: 35,
        borderRadius: 50,
        paddingLeft: 5,
        borderWidth: 1.5,
        borderColor: '#3D8AF7',
    },

    footerIcon: {
        width: 30,
        height: 30,
    },

    iconsContainer: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        paddingLeft: 5
    },

  });

export default Post