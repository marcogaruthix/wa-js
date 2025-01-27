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

import { exportModule } from '../exportModule';
import { Wid } from '../misc';

export interface SimpleAckData {
  type: string;
  stanzaId: string;
  externalIds: string[];
  from: Wid;
  participant: null | Wid;
  recipient: null;
  ts: number;
  ack: number;
  ackString: null | string;
  offline: null;
  biz?: null;
}

/** @whatsapp 90756 */
export declare function handleStatusSimpleAck(
  ackData: SimpleAckData
): Promise<any>;

/** @whatsapp 48309 */
export declare function handleChatSimpleAck(
  ackData: SimpleAckData
): Promise<any>;

/** @whatsapp 84947 */
export declare function handleGroupSimpleAck(
  ackData: SimpleAckData
): Promise<any>;

exportModule(
  exports,
  {
    handleStatusSimpleAck: 'handleStatusSimpleAck',
  },
  (m) => m.handleStatusSimpleAck
);

exportModule(
  exports,
  {
    handleChatSimpleAck: 'handleChatSimpleAck',
  },
  (m) => m.handleChatSimpleAck
);

exportModule(
  exports,
  {
    handleGroupSimpleAck: 'handleGroupSimpleAck',
  },
  (m) => m.handleGroupSimpleAck
);
