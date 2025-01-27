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

import { ChatModel } from '..';
import { exportModule } from '../exportModule';

/** @whatsapp 371 */
export declare namespace ChatPresence {
  function markComposing(chat: ChatModel): Promise<void>;
  function markPaused(chat: ChatModel): Promise<void>;
  function markRecording(chat: ChatModel): Promise<void>;
  function sendPresenceAvailable(): void;
  function sendPresenceUnavailable(): void;
  function clearPresence(chat: ChatModel): void;
}

exportModule(exports, 'ChatPresence', (m) => m.markComposing);
