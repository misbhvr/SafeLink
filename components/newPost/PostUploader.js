import { View, Text, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { HorizontalLine } from '../home/Post'

const placeholderImage = require('../../assets/image_placeholder.png')

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URl is required'),
    caption: Yup.string().max(2200, 'Caption has reached the max characters allowed')
})

const PostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeholderImage)
  const [remoteImageUrl, setRemoteImageUrl] = useState('')
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={(values) => {
        console.log(values)
        console.log('Post submitted successfully!')
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
        <>
        <View
          style={{
            margin: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Image 
            source={remoteImageUrl ? { uri: remoteImageUrl } : thumbnailUrl} 
            style={{
              width: 100, 
              height: 100, 
              borderColor: 'black', 
              borderWidth: 2,
            }}
          />
        <View style={{ flex: 1, marginLeft: 12}}>
          <TextInput 
            style={{fontSize: 20}}
            placeholder='Write a caption...' 
            placeholderTextColor='gray'
            multiline = {true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
          />
        </View>
      
        </View>
        
        <HorizontalLine />
        <TextInput 
            style={{fontSize: 16}}
            placeholder='Enter image URL' 
            placeholderTextColor='gray'
            onChangeText={ text => {
              setRemoteImageUrl(text);
              handleChange('imageUrl')(text);
              
            }}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: 'red'}}>
              {errors.imageUrl}
            </Text>
          )}

          <Button
            onPress={handleSubmit}
            title='Share'
            disabled={!isValid}
          />
        </> 
      }


    </Formik>
  )
}

export default PostUploader