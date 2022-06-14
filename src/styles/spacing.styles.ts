import { StyleSheet } from "react-native"
import gaps from "../constants/gaps.styles"

const generateSpacing = () => {
    const spacing: any = {
    }

    for (let index = 0; index <= 100; index++) {
        spacing[`w_${index}`] = {
            width: `${index}%`
        }
        spacing[`h_${index}`] = {
            height: `${index}%`
        }
    }

    Object.entries(gaps).forEach(([key, value]) => {
        spacing[`m_${key}`] = {
            margin: value
        }
        spacing[`mx_${key}`] = {
            marginHorizotal: value
        }
        spacing[`my_${key}`] = {
            marginVertical: value
        }
        spacing[`mt_${key}`] = {
            marginTop: value
        }
        spacing[`mb_${key}`] = {
            marginBottom: value
        }
        spacing[`ml_${key}`] = {
            marginLeft: value
        }
        spacing[`mr_${key}`] = {
            marginRight: value
        }

        spacing[`p_${key}`] = {
            padding: value
        }
        spacing[`px_${key}`] = {
            paddingHorizotal: value
        }
        spacing[`py_${key}`] = {
            paddingVertical: value
        }
        spacing[`pt_${key}`] = {
            paddingTop: value
        }
        spacing[`pb_${key}`] = {
            paddingBottom: value
        }
        spacing[`pl_${key}`] = {
            paddingLeft: value
        }
        spacing[`pr_${key}`] = {
            paddingRight: value
        }
    })
    return spacing
}

export default StyleSheet.create(generateSpacing())
