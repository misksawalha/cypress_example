import { IcreateEmployeePayload } from '../API/payload/userApiPayload'
import GenaricHelper from '../helper/genaricFunction'
export default class userInit {
    static initUser(): IcreateEmployeePayload {
        let createUserPayload: IcreateEmployeePayload = {
            user: {
                email: `email_${GenaricHelper.genaricRandomString()}@gmail.com`,
                password: '123000',
                username: `misk_${GenaricHelper.genaricRandomString()}`
            }
        }
        return createUserPayload
    }
}