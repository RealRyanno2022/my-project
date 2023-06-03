
export default
{
    "welcome": "Welcome to our app!",
    "signUp": "Sign Up",
    "signIn": "Sign In"
}


// NotFoundScreen

<Text style={styles.title}>404 Not Found</Text>
      <Text style={styles.subtitle}>The page you are looking for does not exist.</Text>


// CancelConfirm

{isSubscribed ? 'Cancelling your subscription...' : 'Your subscription has been cancelled.'}

<Text style={styles.buttonText}>Continue</Text>

// CancelMembership

<Text style={styles.title}>Are you sure?</Text>
      <Text style={styles.text}>
        We value you as a member and we would love to continue serving you with our vast range of flavours and convenient delivery. 
        Remember, you enjoy free shipping as part of your membership!
      </Text>

      <Text style={styles.text}>
        We understand if you need to cancel, and assure you that you can do so at any time.
      </Text>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue Membership</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelText}>Cancel Membership</Text>

// CancelMembershipScreen

<View style={styles.card}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="Postcode"
            value={postcode}
            onChangeText={setPostcode}
          />
        </View>

        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
        </View>

        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          />
        </View>

        <TouchableOpacity style={styles.label} onPress={handleSubmit}>
          <Text style={styles.labelText}>Continue</Text>

/</TouchableOpacity>
//</View>
//ChangeFlavours
<Text style={styles.title}>Change Flavours</Text>
<Text style={styles.continueText}>Continue</Text>


//ChooseFlavours
<Text style={styles.title}>{brandName} Varieties</Text>
<Text style={styles.continueText}>Continue</Text>

 // managesubscription
 
 <Text style={styles.title}>Manage Subscription</Text>
 
 </TouchableOpacity>

{subscription.type === 'monthly' && (
    <Button title="Upgrade to yearly" onPress={() => navigation.dispatch(StackActions.push(('UpgradeMembership')))} />
)}

<Button
  title="Cancel Membership"
  onPress={() => navigation.dispatch(StackActions.push('CancelMembership', { isSubscribed, setIsSubscribed }))}
/>

<Button title="Change Credit Card Information" onPress={() => navigation.dispatch(StackActions.push('ChangeCreditCard'))} />

<Button title="Change Address" onPress={() => navigation.dispatch(StackActions.push('ChangeAddress'))} />

<Button title="Change Flavours" onPress={() => navigation.dispatch(StackActions.push('ChangeFlavours'))} />

SUBSIGNUP

<View style={styles.content}>
<Text style={styles.title}>Try our Vape Pass!</Text>
<Text style={styles.title}>Get a discounted vape every week!</Text>
<Text style={styles.title}></Text>
<Image source={require('../pictures/subs.jpg')} style={styles.image} />
<Text style={styles.subtitle}>Choose a Subscription</Text>
<View style={styles.subscriptionOptions}>
  <TouchableOpacity
    style={[
      styles.subscriptionOption,
      subscriptionType === 'monthly' && styles.selectedSubscription,
    ]}
    onPress={() => handleSubscriptionTypeChange('monthly')}
  >
    <Text style={styles.subscriptionOptionText}>Monthly</Text>
    <Text style={styles.subscriptionOptionPrice}>€29.99/month</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.subscriptionOption,
      subscriptionType === 'yearly' && styles.selectedSubscription,
    ]}
    onPress={() => handleSubscriptionTypeChange('yearly')}
  >
    <Text style={styles.subscriptionOptionText}>Yearly</Text>
    <Text style={styles.subscriptionOptionPrice}>€279.99/year</Text>
  </TouchableOpacity>
</View>
<TouchableOpacity style={styles.signUpButton} onPress={() => navigation.dispatch(StackActions.push("SubVapeScreen"))}>
  <Text style={styles.signUpButtonText}>Sign Up</Text>
</TouchableOpacity>
<View style={styles.subscriptionInfo}>
    <Text style={styles.subscriptionInfoHeader}>What do I get?</Text>
    <Text style={styles.subscriptionInfoDescription}>
    Get a juice of your choice each week, hassle free!
    </Text>
</View>
<View style={styles.subscriptionInfo}>
    <Text style={styles.subscriptionInfoHeader}>Why Vape Pass?</Text>
    <Text style={styles.subscriptionInfoDescription}>
    Save a fortune on shipping and have your flavours delivered automatically. You can cancel your subscription at any time.
    </Text>
</View>
<View style={styles.subscriptionInfo}>
    <Text style={styles.subscriptionInfoHeader}>Can I change flavours?</Text>
    <Text style={styles.subscriptionInfoDescription}>
    Of course! You can change your flavours at any time.
    </Text>
</View>
<View style={styles.subscriptionInfo}>
    <Text style={styles.subscriptionInfoHeader}>What varieties are there?</Text>
    <Text style={styles.subscriptionInfoDescription}>
    We offer all of our disposable vape varieties and will allow a similiar pass for e-juice in the future.
    </Text>

SUBVAPESCREEN 

<Text style={styles.cardText}>Go Back</Text>
