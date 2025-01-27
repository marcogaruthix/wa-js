/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Wid } from '..';
import { exportModule } from '../exportModule';

export interface QueryGroupInviteResult {
  announce: boolean;
  creation: number;
  desc: string;
  descId: string;
  descOwner?: Wid;
  descTime: number;
  id: Wid;
  noFrequentlyForwarded: boolean;
  owner?: Wid;
  parent: boolean;
  participants: {
    id: Wid;
    isAdmin: boolean;
    isSuperAdmin: boolean;
  }[];
  pvId?: string;
  restrict: boolean;
  size: number;
  status: number;
  subject: string;
  subjectOwner?: Wid;
  subjectTime: number;
  support: boolean;
  suspended: boolean;
}

/** @whatsapp 10790 */
export declare function sendQueryGroupInvite(
  inviteCode: string
): Promise<QueryGroupInviteResult>;

exportModule(
  exports,
  {
    sendQueryGroupInvite: 'sendQueryGroupInvite',
  },
  (m) => m.sendQueryGroupInvite
);
