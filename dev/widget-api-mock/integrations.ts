/*!
 * Copyright 2023, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {IntegrationInformation, IntegrationStates, IntegrationType} from '@staffbase/widget-sdk'

export default async (_type: IntegrationType): Promise<IntegrationInformation> => {
    const date = new Date();
    const expireDate = new Date();

    expireDate.setDate(date.getDate() + 1);

    return {
        status: IntegrationStates.AVAILABLE,
        enabledFeatures: ['foo'],
        supportedFeatures: ['foo'],
        token: {
            accessToken: "fooToken",
            accessTokenExpiresAt: expireDate
        },
        signIn: () => { console.log('Sign in') }
    }
}
