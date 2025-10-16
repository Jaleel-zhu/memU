
<div align="center">

![MemU Banner](assets/banner.png)

### MemU: نظام الذاكرة الوكيلي من الجيل التالي

[![PyPI version](https://badge.fury.io/py/memu-py.svg)](https://badge.fury.io/py/memu-py)
[![License: Apache 2.0](https:/img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Python 3.8+](https:/img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Discord](https:/img.shields.io/badge/Discord-Join%20Chat-5865F2?logo=discord&logoColor=white)](https://discord.gg/memu)
[![Twitter](https:/img.shields.io/badge/Twitter-Follow-1DA1F2?logo=x&logoColor=white)](https://x.com/memU_ai)
</div>

**MemU** هو نظام ذاكرة وكيلية من الجيل التالي يعيد تصميم بنية ذاكرة الوكيل من منظور يركز على الذاكرة—تجريدها كطبقة بيانات تتطور ديناميكيًا تقوم بتنظيم واسترجاع المعلومات ذات الصلة بذكاء بناءً على السياق. من خلال آليات الاسترجاع التكيفي والتراجع، يستخلص النظام ديناميكيًا المعلومات الأكثر صلة. يستخدم النظام بنية **ذاكرة موحدة متعددة الوسائط** مع دعم أصلي لأنواع البيانات المتنوعة بما في ذلك النصوص والصور والصوت، مما يشكل تمثيلاً متماسكًا للذاكرة.

قم بزيارة صفحتنا الرئيسية: [memu.pro](https://memu.pro/)

---

## ⭐ ضع نجمة لنا على GitHub

ضع نجمة على MemU ليصلك إشعار بالإصدارات الجديدة وللانضمام إلى مجتمعنا المتنامي من مطوري الذكاء الاصطناعي الذين يبنون وكلاء أذكياء بقدرات ذاكرة مستمرة.

![star-us](./assets/star.gif)

**💬 انضم إلى مجتمعنا على Discord:** [https://discord.gg/memu](https://discord.gg/memu)

---

## 🚀 البدء

هناك ثلاث طرق للبدء باستخدام MemU:

### ☁️ إصدار السحابة (المنصة الإلكترونية) ([Online Platform](https://app.memu.so))

الطريقة الأسرع لدمج تطبيقك مع memU. مثالي للفرق والأفراد الذين يريدون وصولاً فوريًا بدون تعقيدات الإعداد. نحن نستضيف النماذج، واجهات برمجة التطبيقات (APIs)، والتخزين السحابي، مما يضمن حصول تطبيقك على أفضل جودة لذاكرة الذكاء الاصطناعي.

- **وصول فوري** - ابدأ بدمج ذكريات الذكاء الاصطناعي في دقائق
- **بنية تحتية مُدارة** - نحن نتولى أمر التوسع، التحديثات، والصيانة للحصول على جودة ذاكرة مثالية
- **دعم متميز** - اشترك واحصل على مساعدة ذات أولوية من فريقنا الهندسي

### خطوة بخطوة

**الخطوة 1:** أنشئ حسابًا

أنشئ حسابًا على https://app.memu.so

ثم، اذهب إلى https://app.memu.so/api-key/ لتوليد مفاتيح واجهة برمجة التطبيقات (api-keys).

**الخطوة 2:** أضف ثلاثة أسطر إلى الكود الخاص بك
```python
pip install memu-py

# Example usage
from memu import MemuClient
````

**الخطوة 3:** البدء السريع

```python
# Initialize
memu_client = MemuClient(
    base_url="[https://api.memu.so](https://api.memu.so)", 
    api_key=os.getenv("MEMU_API_KEY")
)
memu_client.memorize_conversation(
    conversation=conversation_text, # Recommend longer conversation (~8000 tokens), see [https://memu.pro/blog/memu-best-practice](https://memu.pro/blog/memu-best-practice) for details
    user_id="user001", 
    user_name="User", 
    agent_id="assistant001", 
    agent_name="Assistant"
)
```

تحقق من [مرجع API](https://www.google.com/search?q=docs/API_REFERENCE.md) أو [مدونتنا](https://memu.pro/blog) لمزيد من التفاصيل.

📖 **شاهد [`example/client/memory.py`](https://www.google.com/search?q=example/client/memory.py) للحصول على تفاصيل التكامل الكاملة**

✨ **هذا كل شيء!** MemU يتذكر كل شيء ويساعد الذكاء الاصطناعي الخاص بك على التعلم من المحادثات السابقة.

### 🏢 إصدار المؤسسات

للمؤسسات التي تتطلب أقصى قدر من الأمان، والتخصيص، والتحكم، وأفضل جودة:

  - **ترخيص تجاري** - ميزات ملكية كاملة، حقوق استخدام تجاري، خيارات العلامة البيضاء (White-labeling)
  - **تطوير مخصص** - تكامل SSO/RBAC، فريق خوارزميات مخصص لتحسين الإطار الخاص بسيناريوهات محددة
  - **الذكاء والتحليلات** - تحليل سلوك المستخدم، مراقبة الإنتاج في الوقت الفعلي، التحسين التلقائي للوكيل
  - **دعم متميز** - دعم مخصص على مدار الساعة طوال أيام الأسبوع، اتفاقيات مستوى خدمة (SLAs) مخصصة، خدمات تنفيذ احترافية

📧 **استفسارات المؤسسات:** [contact@nevamind.ai](mailto:contact@nevamind.ai)

### 🏠 الاستضافة الذاتية (إصدار المجتمع)

للمستخدمين والمطورين الذين يفضلون التحكم المحلي، خصوصية البيانات، أو التخصيص:

  * **خصوصية البيانات** - حافظ على البيانات الحساسة ضمن بنيتك التحتية
  * **التخصيص** - عدّل ووسّع المنصة لتناسب احتياجاتك
  * **التحكم في التكلفة** - تجنب رسوم السحابة المتكررة لعمليات النشر واسعة النطاق

انظر [ملف README للاستضافة الذاتية](https://www.google.com/search?q=README.self_host.md)

-----

## ✨ الميزات الرئيسية

### 🎥 فيديو العرض التوضيحي

\<div align="left"\>
 <a href="https://www.youtube.com/watch?v=qZIuCoLglHs"\>
  <img src="https:/img.youtube.com/vi/ueOe4ZPlZLU/maxresdefault.jpg" alt="MemU Demo Video" width="600"\>
 </a\>
 <br>
 <em\>انقر لمشاهدة فيديو عرض MemU التوضيحي</em\>
</div\>

-----

## 🎓 **حالات الاستخدام**

## | | | | | 
|:---:|:---:|:---:|:---:| 
| <img src="assets/usecase/ai\_companion-0000.jpg" width="150" height="200"\><br>**الرفيق الذكي** | <img src="assets/usecase/ai\_role\_play-0000.jpg" width="150" height="200"\><br>**لعب الأدوار الذكي** | <img src="assets/usecase/ai\_ip-0000.png" width="150" height="200"\><br>**شخصيات الملكية الفكرية الذكية** | <img src="assets/usecase/ai\_edu-0000.jpg" width="150" height="200"\><br>**التعليم الذكي** | | <img src="assets/usecase/ai\_therapy-0000.jpg" width="150" height="200"\><br>**العلاج الذكي** | <img src="assets/usecase/ai\_robot-0000.jpg" width="150" height="200"\><br>**الروبوت الذكي** | <img src="assets/usecase/ai\_creation-0000.jpg" width="150" height="200"\><br>**الإبداع الذكي** | والمزيد...|

## 🤝 المساهمة

نحن نبني الثقة من خلال التعاون مفتوح المصدر. مساهماتك الإبداعية تدفع ابتكار memU إلى الأمام. استكشف قضايا ومشاريع GitHub الخاصة بنا للبدء وترك بصمتك على مستقبل memU.

📋 **[اقرأ دليل المساهمة المفصل الخاص بنا →](https://www.google.com/search?q=CONTRIBUTING.md)**

### **📄 الترخيص**

بالمساهمة في MemU، فإنك توافق على أن مساهماتك ستُرخص بموجب **ترخيص أباتشي 2.0 (Apache License 2.0)**.

-----

## 🌍 المجتمع

لمزيد من المعلومات، يرجى الاتصال بـ info@nevamind.ai

  - **قضايا GitHub:** أبلغ عن الأخطاء، اطلب الميزات، وتتبع التطوير. [أرسل مشكلة](https://github.com/NevaMind-AI/memU/issues)

  - **Discord:** احصل على دعم في الوقت الفعلي، تحدث مع المجتمع، وابقَ مُحدّثًا. [انضم إلينا](https://discord.com/invite/hQZntfGsbJ)

  - **X (تويتر):** تابع للحصول على التحديثات، رؤى الذكاء الاصطناعي، والإعلانات الرئيسية. [تابعنا](https://x.com/memU_ai)

-----

## 🤝 النظام البيئي

نحن فخورون بالعمل مع منظمات مذهلة:

<div align="center"\>

### أدوات التطوير

<a href="https://github.com/TEN-framework/ten-framework"\><img src="https://avatars.githubusercontent.com/u/113095513?s=200\&v=4" alt="Ten" height="40" style="margin: 10px;"\></a\>
<a href="https://github.com/openagents-org/openagents"\><img src="assets/partners/openagents.png" alt="OpenAgents" height="40" style="margin: 10px;"\></a\>
<a href="https://github.com/camel-ai/camel"\><img src="https://avatars.githubusercontent.com/u/134388954?s=200\&v=4" alt="Camel" height="40" style="margin: 10px;"\></a\>
<a href="https://github.com/eigent-ai/eigent"\><img src="https://www.eigent.ai/nav/logo\_icon.svg" alt="Eigent" height="40" style="margin: 10px;"\></a\>
<a href="https://github.com/milvus-io/milvus"\><img src="https://miro.medium.com/v2/resize:fit:2400/1\*-VEGyAgcIBD62XtZWavy8w.png" alt="Ten" height="40" style="margin: 10px;"\></a\>
<a href="https://xroute.ai/"\><img src="assets/partners/xroute.png" alt="xRoute" height="40" style="margin: 10px;"\></a\>
<a href="https://jaaz.app/"\><img src="assets/partners/jazz.png" alt="jazz" height="40" style="margin: 10px;"\></a\>
<a href="https://github.com/Buddie-AI/Buddie"\><img src="assets/partners/buddie.png" alt="buddie" height="40" style="margin: 10px;"\></a\>
<a href="https://github.com/bytebase/bytebase"\><img src="assets/partners/bytebase.png" alt="bytebase" height="40" style="margin: 10px;"\></a\>

</div\>

-----

*هل أنت مهتم بالشراكة مع MemU؟ اتصل بنا على [contact@nevamind.ai](mailto:contact@nevamind.ai)*

-----

## 📱 انضم إلى مجتمعنا على WeChat

تواصل معنا على WeChat للحصول على أحدث التحديثات، ومناقشات المجتمع، والمحتوى الحصري:

<div align="center"\>
<img src="assets/qrcode.png" alt="MemU WeChat and discord QR Code" width="480" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin: 10px;"\>

*امسح أيًا من رموز QR أعلاه للانضمام إلى مجتمعنا على WeChat*

</div\>

-----

*ابقَ على اتصال مع مجتمع MemU! انضم إلى مجموعات WeChat الخاصة بنا لإجراء مناقشات في الوقت الفعلي، والحصول على دعم فني، وفرص للتواصل.*

```
```