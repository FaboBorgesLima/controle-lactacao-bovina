import { Text, View } from "react-native"
import { Containers, Styles } from "../assets"

const ColorTest = () => (
    <View style={Styles.defaultBody}>
        <View style={Containers.main}>
            <View style={[Containers.flexColumn,Containers.spaceBetween]}>
                <View style={Styles.defaultButton}>
                    <Text style={Styles.defaultH1}>Default</Text>
                </View>
                <View style={Styles.primaryButton}>
                    <Text style={Styles.primaryH1}>Primary</Text>
                </View>
                <View style={Styles.secondaryButton}>
                    <Text style={Styles.secondaryH1}>Secondary</Text>
                </View>
            </View>
        </View>
    </View>
)

export default ColorTest;